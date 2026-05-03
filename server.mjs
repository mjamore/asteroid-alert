import { createServer as createHttpServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer, loadEnv } from "vite";
import { z } from "zod";

const NASA_FEED_URL = "https://api.nasa.gov/neo/rest/v1/feed/today";
const NASA_LOOKUP_URL = "https://api.nasa.gov/neo/rest/v1/neo/3126183";
const root = fileURLToPath(new URL(".", import.meta.url));
const distRoot = resolve(root, "dist");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const isProduction = mode === "production";
const loadedEnv = loadEnv(mode, root, "");

Object.entries(loadedEnv).forEach(([key, value]) => {
  if (process.env[key] === undefined) process.env[key] = value;
});

const envSchema = z.object({
  NASA_API_KEY: z.string().trim().min(1, "NASA_API_KEY is required"),
});

function getNasaApiKey() {
  const result = envSchema.safeParse(process.env);
  if (result.success) return result.data.NASA_API_KEY;
  const message = result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("; ");
  throw new Error(`Invalid NASA API environment: ${message}`);
}

function buildNasaUrl(baseUrl, params = {}) {
  const url = new URL(baseUrl);
  url.searchParams.set("api_key", getNasaApiKey());
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url;
}

async function fetchNasaData() {
  const [feedResponse, lookupResponse] = await Promise.all([
    fetch(buildNasaUrl(NASA_FEED_URL, { detailed: "true" })),
    fetch(buildNasaUrl(NASA_LOOKUP_URL)),
  ]);
  if (!feedResponse.ok || !lookupResponse.ok) {
    throw new Error("NASA API request failed");
  }
  const [feed, lookup] = await Promise.all([feedResponse.json(), lookupResponse.json()]);
  return { feed, lookup };
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

async function serveStatic(request, response) {
  const requestUrl = new URL(request.url, "http://localhost");
  const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = join(distRoot, pathname);
  const contentTypes = {
    ".css": "text/css",
    ".html": "text/html",
    ".js": "text/javascript",
    ".jpg": "image/jpeg",
    ".png": "image/png",
  };

  try {
    const body = await readFile(filePath);
    response.writeHead(200, { "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream" });
    response.end(body);
  } catch {
    const body = await readFile(join(distRoot, "index.html"));
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(body);
  }
}

const vite = isProduction
  ? null
  : await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

const server = createHttpServer(async (request, response) => {
  if (request.url?.startsWith("/api/neo-data")) {
    try {
      sendJson(response, 200, await fetchNasaData());
    } catch (error) {
      console.error(error);
      sendJson(response, 502, { error: "NASA data unavailable" });
    }
    return;
  }

  if (vite) {
    vite.middlewares(request, response);
    return;
  }

  await serveStatic(request, response);
});

const port = Number(process.env.PORT || 5173);
const host = process.env.HOST || "127.0.0.1";
server.listen(port, host, () => {
  console.log(`Asteroid Alert server listening on http://${host}:${port}`);
});
