import React from "react";
import { createRoot } from "react-dom/client";
import { Activity, Crosshair, Database, FastForward, Gauge, Grid3X3, List, Pause, Play, Radar, Rewind, Satellite, SkipBack, SkipForward, Target } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./styles.css";

const NEO_DATA_URL = "/api/neo-data";

const FALLBACK_FEED = {
  date: "2026-05-03",
  count: 3,
  objects: [
    {
      id: "3126183",
      name: "(2002 JR100)",
      hazard: false,
      sentry: false,
      mag: 24.3,
      diameter_m: [36.6906137531, 82.0427064882],
      time: "2026-May-03 14:23",
      velocity_kps: 6.1402465937,
      miss_lunar: 32.4860018192,
      miss_km: 12493153.411229936,
      orbit: "ATE",
      uncertainty: "0",
      moid: 0.0197048,
      inclination: 3.708936667084509,
      eccentricity: 0.2988780529948123,
      period_days: 324.2477815513286,
      approachCount: 185,
    },
    {
      id: "3762171",
      name: "(2016 UY56)",
      hazard: false,
      sentry: false,
      mag: 23.94,
      diameter_m: [43.3066885476, 96.8366994728],
      time: "2026-May-03 11:45",
      velocity_kps: 14.5353317737,
      miss_lunar: 28.3752874982,
      miss_km: 10912294.525368506,
      orbit: "APO",
      uncertainty: "2",
      moid: 0.00271971,
      inclination: 0.8974464305530804,
      eccentricity: 0.4460597278903202,
      period_days: 557.3615554174811,
    },
    {
      id: "3819554",
      name: "(2018 HL1)",
      hazard: false,
      sentry: false,
      mag: 23.9,
      diameter_m: [44.1118199997, 98.6370281305],
      time: "2026-May-03 08:21",
      velocity_kps: 21.3709635327,
      miss_lunar: 109.6842366354,
      miss_km: 42181306.35792238,
      orbit: "APO",
      uncertainty: "7",
      moid: 0.010605,
      inclination: 19.37465687274077,
      eccentricity: 0.3639903309122531,
      period_days: 419.8272791271368,
    },
  ],
};

const FALLBACK_LOOKUP = {
  id: "3126183",
  name: "(2002 JR100)",
  designation: "2002 JR100",
  hazard: false,
  sentry: false,
  diameter_m: {
    estimated_diameter_min: 36.6906137531,
    estimated_diameter_max: 82.0427064882,
  },
  orbit_class: {
    orbit_class_type: "ATE",
    orbit_class_description: "Near-Earth asteroid orbits similar to that of 2062 Aten",
    orbit_class_range: "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU",
  },
  orbit: {
    uncertainty: "0",
    first_observation_date: "2002-05-14",
    last_observation_date: "2019-07-31",
    data_arc_in_days: 6287,
    observations_used: 149,
    eccentricity: ".2988780529948123",
    semi_major_axis: ".9236747201676322",
    inclination: "3.708936667084509",
    period_days: "324.2477815513286",
    moid: ".0197048",
  },
  approach_count: 185,
  nearest: [
    {
      date: "2028-09-04",
      full: "2028-Sep-04 03:53",
      body: "Venus",
      velocity_kps: 9.1913738897,
      miss_lunar: 4.2214438712,
      miss_km: 1623442.188833096,
    },
    {
      date: "1996-09-08",
      full: "1996-Sep-08 00:22",
      body: "Venus",
      velocity_kps: 9.4254790309,
      miss_lunar: 4.4366147477,
      miss_km: 1706190.530248091,
    },
    {
      date: "2100-08-28",
      full: "2100-Aug-28 15:52",
      body: "Venus",
      velocity_kps: 8.9560533806,
      miss_lunar: 4.5196555502,
      miss_km: 1738125.561551666,
    },
    {
      date: "1911-03-05",
      full: "1911-Mar-05 20:11",
      body: "Venus",
      velocity_kps: 9.3153126182,
      miss_lunar: 4.8203590076,
      miss_km: 1853767.198386308,
    },
    {
      date: "2010-04-29",
      full: "2010-Apr-29 23:48",
      body: "Earth",
      velocity_kps: 7.9951897717,
      miss_lunar: 8.0207652482,
      miss_km: 3084548.578151006,
    },
  ],
  fastest: [
    {
      date: "2033-05-18",
      full: "2033-May-18 02:14",
      body: "Earth",
      velocity_kps: 23.0809819698,
      miss_lunar: 190.6743696972,
      miss_km: 73327710.97761868,
    },
    {
      date: "2105-05-17",
      full: "2105-May-17 15:05",
      body: "Earth",
      velocity_kps: 22.7206180799,
      miss_lunar: 185.4914354596,
      miss_km: 71334508.09254147,
    },
    {
      date: "2185-05-16",
      full: "2185-May-16 16:13",
      body: "Earth",
      velocity_kps: 22.4341878142,
      miss_lunar: 181.3980322999,
      miss_km: 69760306.56621142,
    },
  ],
};

const ORBIT_COLORS = {
  ATE: "#ffbf3f",
  APO: "#16c9e8",
  AMO: "#64d56b",
  IEO: "#f76659",
};

const SIMULATED_WINDOW_DAYS = 1;
const BASELINE_WINDOW_SECONDS = 120;
const SIDEREAL_DAY_IN_SOLAR_DAYS = 0.99726968;
const LUNAR_DISTANCE_KM = 384399;
const ORBIT_DISTANCE_SCALE_LD_PER_UNIT = 34;
const ORBIT_SEGMENTS = 192;

const parseNum = (value, fallback = 0) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

function normalizeFeed(payload) {
  const dates = Object.keys(payload.near_earth_objects || {});
  const date = dates[0] || FALLBACK_FEED.date;
  const objects = (payload.near_earth_objects?.[date] || []).map((object) => {
    const approach = object.close_approach_data?.[0] || {};
    const orbit = object.orbital_data || {};
    return {
      id: object.id,
      name: object.name,
      hazard: object.is_potentially_hazardous_asteroid,
      sentry: object.is_sentry_object,
      mag: object.absolute_magnitude_h,
      diameter_m: [object.estimated_diameter?.meters?.estimated_diameter_min, object.estimated_diameter?.meters?.estimated_diameter_max].map((value) => parseNum(value)),
      time: approach.close_approach_date_full || approach.close_approach_date,
      velocity_kps: parseNum(approach.relative_velocity?.kilometers_per_second),
      miss_lunar: parseNum(approach.miss_distance?.lunar),
      miss_km: parseNum(approach.miss_distance?.kilometers),
      orbit: orbit.orbit_class?.orbit_class_type || "NEO",
      uncertainty: orbit.orbit_uncertainty ?? "n/a",
      moid: parseNum(orbit.minimum_orbit_intersection),
      inclination: parseNum(orbit.inclination),
      eccentricity: parseNum(orbit.eccentricity),
      period_days: parseNum(orbit.orbital_period),
    };
  });
  return { date, count: payload.element_count || objects.length, objects };
}

function normalizeLookup(payload) {
  const approaches = (payload.close_approach_data || []).map((approach) => ({
    date: approach.close_approach_date,
    full: approach.close_approach_date_full,
    body: approach.orbiting_body,
    velocity_kps: parseNum(approach.relative_velocity?.kilometers_per_second),
    miss_lunar: parseNum(approach.miss_distance?.lunar),
    miss_km: parseNum(approach.miss_distance?.kilometers),
  }));
  return {
    id: payload.id,
    name: payload.name,
    designation: payload.designation,
    hazard: payload.is_potentially_hazardous_asteroid,
    sentry: payload.is_sentry_object,
    diameter_m: payload.estimated_diameter?.meters,
    orbit_class: payload.orbital_data?.orbit_class,
    orbit: {
      uncertainty: payload.orbital_data?.orbit_uncertainty,
      first_observation_date: payload.orbital_data?.first_observation_date,
      last_observation_date: payload.orbital_data?.last_observation_date,
      data_arc_in_days: payload.orbital_data?.data_arc_in_days,
      observations_used: payload.orbital_data?.observations_used,
      eccentricity: payload.orbital_data?.eccentricity,
      semi_major_axis: payload.orbital_data?.semi_major_axis,
      inclination: payload.orbital_data?.inclination,
      period_days: payload.orbital_data?.orbital_period,
      moid: payload.orbital_data?.minimum_orbit_intersection,
    },
    approach_count: approaches.length,
    nearest: [...approaches].sort((a, b) => a.miss_lunar - b.miss_lunar).slice(0, 8),
    fastest: [...approaches].sort((a, b) => b.velocity_kps - a.velocity_kps).slice(0, 5),
  };
}

function formatNumber(value, digits = 1) {
  if (!Number.isFinite(Number(value))) return "n/a";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(Number(value));
}

function formatCompact(value) {
  if (!Number.isFinite(Number(value))) return "n/a";
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(Number(value));
}

function scoreObject(object) {
  const closeness = Math.max(0, 120 - object.miss_lunar) / 120;
  const speed = Math.min(object.velocity_kps / 25, 1);
  const size = Math.min((object.diameter_m[1] || 0) / 120, 1);
  const uncertainty = Math.min(parseNum(object.uncertainty) / 9, 1);
  return Math.round((closeness * 0.38 + speed * 0.28 + size * 0.2 + uncertainty * 0.14) * 100);
}

function dangerLabel(score) {
  if (score >= 70) return "High";
  if (score >= 55) return "Elevated";
  if (score >= 40) return "Guarded";
  return "Low";
}

function useNeoData() {
  const [data, setData] = React.useState({
    feed: FALLBACK_FEED,
    lookup: FALLBACK_LOOKUP,
    source: "fallback seed",
    status: "loading",
  });

  React.useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        const response = await fetch(NEO_DATA_URL);
        if (!response.ok) throw new Error("NASA API request failed");
        const { feed: feedJson, lookup: lookupJson } = await response.json();
        if (!cancelled) {
          setData({
            feed: normalizeFeed(feedJson),
            lookup: normalizeLookup(lookupJson),
            source: "NASA NeoWs live",
            status: "live",
          });
        }
      } catch (error) {
        if (!cancelled) {
          setData((current) => ({
            ...current,
            status: "offline",
            source: "NASA seed snapshot",
          }));
        }
      }
    }

    loadData();
    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}

function loadRealisticEarthTextures(renderer) {
  const textureLoader = new THREE.TextureLoader();
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
  const anisotropy = Math.min(maxAnisotropy, 8);
  const dayTexture = textureLoader.load("/textures/planets/earth_day_4096.jpg");
  const nightTexture = textureLoader.load("/textures/planets/earth_night_4096.jpg");
  const bumpRoughnessCloudsTexture = textureLoader.load("/textures/planets/earth_bump_roughness_clouds_4096.jpg");

  dayTexture.colorSpace = THREE.SRGBColorSpace;
  nightTexture.colorSpace = THREE.SRGBColorSpace;
  [dayTexture, nightTexture, bumpRoughnessCloudsTexture].forEach((texture) => {
    texture.anisotropy = anisotropy;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
  });

  return { dayTexture, nightTexture, bumpRoughnessCloudsTexture };
}

function createEarthMaterial(textures, sunDirection) {
  return new THREE.ShaderMaterial({
    extensions: { derivatives: true },
    uniforms: {
      uDayTexture: { value: textures.dayTexture },
      uNightTexture: { value: textures.nightTexture },
      uBumpRoughnessCloudsTexture: { value: textures.bumpRoughnessCloudsTexture },
      uSunDirection: { value: sunDirection },
      uAtmosphereDayColor: { value: new THREE.Color("#4db2ff") },
      uAtmosphereTwilightColor: { value: new THREE.Color("#bc490b") },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,
    fragmentShader: `
      uniform sampler2D uDayTexture;
      uniform sampler2D uNightTexture;
      uniform sampler2D uBumpRoughnessCloudsTexture;
      uniform vec3 uSunDirection;
      uniform vec3 uAtmosphereDayColor;
      uniform vec3 uAtmosphereTwilightColor;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      vec3 perturbNormal(vec3 normal, float elevation) {
        vec3 positionDx = dFdx(vWorldPosition);
        vec3 positionDy = dFdy(vWorldPosition);
        float elevationDx = dFdx(elevation);
        float elevationDy = dFdy(elevation);
        vec3 tangent = normalize(positionDx - normal * dot(normal, positionDx));
        vec3 bitangent = normalize(positionDy - normal * dot(normal, positionDy));
        return normalize(normal - tangent * elevationDx * 7.0 - bitangent * elevationDy * 7.0);
      }

      void main() {
        vec4 packed = texture2D(uBumpRoughnessCloudsTexture, vUv);
        float clouds = smoothstep(0.2, 1.0, packed.b);
        vec3 normal = perturbNormal(normalize(vNormal), max(packed.r, clouds) * 0.16);
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        float sunOrientation = dot(normal, normalize(uSunDirection));
        float dayStrength = smoothstep(-0.25, 0.5, sunOrientation);
        float atmosphereDayStrength = smoothstep(-0.5, 1.0, sunOrientation);

        vec3 dayColor = texture2D(uDayTexture, vUv).rgb;
        vec3 nightColor = texture2D(uNightTexture, vUv).rgb * 1.35;
        dayColor = mix(dayColor, vec3(1.0), clouds * 1.65);

        vec3 atmosphereColor = mix(
          uAtmosphereTwilightColor,
          uAtmosphereDayColor,
          smoothstep(-0.25, 0.75, sunOrientation)
        );
        float fresnel = 1.0 - abs(dot(viewDirection, normal));
        float atmosphereMix = clamp(atmosphereDayStrength * pow(fresnel, 2.0), 0.0, 1.0);

        vec3 halfVector = normalize(normalize(uSunDirection) + viewDirection);
        float oceanMask = (1.0 - smoothstep(0.08, 0.52, packed.g)) * (1.0 - clouds);
        float specular = pow(max(dot(normal, halfVector), 0.0), 72.0) * oceanMask * dayStrength * 1.45;

        float twilight = smoothstep(-0.2, 0.08, sunOrientation) * (1.0 - smoothstep(0.12, 0.42, sunOrientation));
        vec3 color = mix(nightColor, dayColor, dayStrength);
        color += atmosphereColor * twilight * (1.0 - clouds) * 0.22;
        color += vec3(0.75, 0.9, 1.0) * specular;
        color = mix(color, atmosphereColor, atmosphereMix * 0.45);

        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
}

function createAtmosphereMaterial(sunDirection) {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uSunDirection: { value: sunDirection },
      uAtmosphereDayColor: { value: new THREE.Color("#4db2ff") },
      uAtmosphereTwilightColor: { value: new THREE.Color("#bc490b") },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uSunDirection;
      uniform vec3 uAtmosphereDayColor;
      uniform vec3 uAtmosphereTwilightColor;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        float sunOrientation = dot(normal, normalize(uSunDirection));
        vec3 atmosphereColor = mix(
          uAtmosphereTwilightColor,
          uAtmosphereDayColor,
          smoothstep(-0.25, 0.75, sunOrientation)
        );
        float fresnel = 1.0 - abs(dot(viewDirection, normal));
        float alpha = pow(smoothstep(0.22, 1.0, fresnel), 3.0) * smoothstep(-0.5, 1.0, sunOrientation) * 0.9;
        gl_FragColor = vec4(atmosphereColor, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
}

function createLabelSprite(text, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 384;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");
  ctx.font = "700 34px Inter, Arial, sans-serif";
  ctx.fillStyle = "rgba(2, 8, 14, 0.72)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);
  ctx.fillStyle = color;
  ctx.fillText(text.replace(/[()]/g, ""), 22, 60);
  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
  sprite.scale.set(1.9, 0.48, 1);
  return sprite;
}

function buildEllipse(radiusX, radiusY, inclination, color, dashed = false) {
  const points = [];
  for (let i = 0; i <= ORBIT_SEGMENTS; i += 1) {
    const angle = (i / ORBIT_SEGMENTS) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radiusX, 0, Math.sin(angle) * radiusY));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = dashed
    ? new THREE.LineDashedMaterial({ color, dashSize: 0.18, gapSize: 0.11, transparent: true, opacity: 0.86 })
    : new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.68 });
  const line = new THREE.Line(geometry, material);
  line.rotation.x = THREE.MathUtils.degToRad(inclination);
  if (dashed) line.computeLineDistances();
  return line;
}

function approximateEllipseCircumference(radiusX, radiusY) {
  const sum = radiusX + radiusY;
  if (sum === 0) return 1;
  const h = ((radiusX - radiusY) / sum) ** 2;
  return Math.PI * sum * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
}

function getOrbitLayout(object, index) {
  const radiusX = 2.55 + object.miss_lunar / 34 + index * 0.22;
  const radiusY = 1.48 + Math.min(object.period_days || 420, 780) / 210;
  const orbitLengthLd = approximateEllipseCircumference(radiusX, radiusY) * ORBIT_DISTANCE_SCALE_LD_PER_UNIT;
  const travelLdPerDay = (object.velocity_kps * 86400) / LUNAR_DISTANCE_KM;
  return {
    radiusX,
    radiusY,
    inclinationDegrees: object.inclination,
    inclinationRadians: THREE.MathUtils.degToRad(object.inclination),
    phase: index * 1.9 + object.velocity_kps / 6,
    periodDays: Math.max(object.period_days || 365, 1),
    angularRateRadiansPerDay: orbitLengthLd > 0 ? (travelLdPerDay / orbitLengthLd) * Math.PI * 2 : 0,
  };
}

function getOrbitPosition(layout, simulatedDays) {
  const angle = layout.phase + simulatedDays * layout.angularRateRadiansPerDay;
  return new THREE.Vector3(Math.cos(angle) * layout.radiusX, 0, Math.sin(angle) * layout.radiusY).applyAxisAngle(new THREE.Vector3(1, 0, 0), layout.inclinationRadians);
}

function createAsteroidVisual(object, index, selectedId) {
  const selected = object.id === selectedId;
  const color = ORBIT_COLORS[object.orbit] || "#ffffff";
  const layout = getOrbitLayout(object, index);
  const orbit = buildEllipse(layout.radiusX, layout.radiusY, layout.inclinationDegrees, color, selected);
  orbit.userData = { id: object.id, kind: "orbit" };

  const rock = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.12 + Math.min(object.diameter_m[1] || 55, 120) / 650, 2),
    new THREE.MeshStandardMaterial({
      color: selected ? "#ffd06a" : "#b9afa3",
      roughness: 0.92,
      metalness: 0.06,
      emissive: selected ? "#8a4b00" : "#101010",
      emissiveIntensity: selected ? 0.32 : 0.08,
    }),
  );
  rock.userData = {
    id: object.id,
    orbitLayout: layout,
    selected,
    velocityKps: object.velocity_kps,
  };

  const marker = new THREE.Mesh(
    new THREE.RingGeometry(0.22, 0.28, 48),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: selected ? 0.95 : 0.28,
      side: THREE.DoubleSide,
    }),
  );
  marker.userData = { follows: rock, selected };

  const label = createLabelSprite(object.name, color);
  label.userData = { follows: rock, label: true };

  return [orbit, rock, marker, label];
}

function AsteroidScene({ objects, selectedId, progress, playing, showGrid, showTrails, showLabels, showHud }) {
  const mountRef = React.useRef(null);
  const sceneRef = React.useRef(null);
  const stateRef = React.useRef({ objects, selectedId, progress, playing, showGrid, showTrails, showLabels, showHud });

  React.useEffect(() => {
    stateRef.current = { objects, selectedId, progress, playing, showGrid, showTrails, showLabels, showHud };
  }, [objects, selectedId, progress, playing, showGrid, showTrails, showLabels, showHud]);

  React.useEffect(() => {
    const mount = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#02050a", 0.038);
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 6.2, 9.8);
    camera.lookAt(0, 0, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 4.2;
    controls.maxDistance = 20;
    controls.target.set(0, 0, 0);
    controls.update();

    const group = new THREE.Group();
    scene.add(group);

    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(2800 * 3);
    for (let i = 0; i < starPositions.length; i += 3) {
      const radius = 25 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i + 1] = radius * Math.cos(phi);
      starPositions[i + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: "#d9f4ff", size: 0.035, transparent: true, opacity: 0.78 }));
    scene.add(stars);

    const ambient = new THREE.AmbientLight("#6688a8", 0.28);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight("#ffffff", 3.6);
    sun.position.set(-5, 5, 7);
    scene.add(sun);
    const rim = new THREE.DirectionalLight("#16c9e8", 0.35);
    rim.position.set(7, 2, -4);
    scene.add(rim);

    const sunDirection = sun.position.clone().normalize();
    const earthTextures = loadRealisticEarthTextures(renderer);
    const sphereGeometry = new THREE.SphereGeometry(1.75, 160, 160);
    const earth = new THREE.Mesh(sphereGeometry, createEarthMaterial(earthTextures, sunDirection));
    group.add(earth);

    const atmosphere = new THREE.Mesh(sphereGeometry, createAtmosphereMaterial(sunDirection));
    atmosphere.scale.setScalar(1.045);
    group.add(atmosphere);

    const earthOrbit = buildEllipse(3.15, 3.15, 0, "#f2f7ff", true);
    earthOrbit.material.opacity = 0.36;
    group.add(earthOrbit);

    const grid = new THREE.GridHelper(12, 24, "#234354", "#132734");
    grid.material.opacity = 0.22;
    grid.material.transparent = true;
    group.add(grid);

    const asteroidGroup = new THREE.Group();
    group.add(asteroidGroup);
    sceneRef.current = { asteroidGroup, grid, group, earth, atmosphere, stars, renderer, camera, controls, scene };

    let frame = 0;

    function rebuildAsteroids() {
      asteroidGroup.clear();
      const current = stateRef.current;
      current.objects.forEach((object, index) => {
        asteroidGroup.add(...createAsteroidVisual(object, index, current.selectedId));
      });
    }

    rebuildAsteroids();

    function animate() {
      frame = requestAnimationFrame(animate);
      const current = stateRef.current;
      if (!sceneRef.current) return;
      const time = performance.now() * 0.001;
      const simulatedDays = current.progress * SIMULATED_WINDOW_DAYS;
      group.rotation.y = Math.sin(time * 0.08) * 0.04;
      earth.rotation.y = (simulatedDays / SIDEREAL_DAY_IN_SOLAR_DAYS) * Math.PI * 2;
      atmosphere.rotation.y = earth.rotation.y;
      stars.rotation.y += 0.00015;
      controls.update();
      grid.visible = current.showGrid;
      earthOrbit.visible = current.showTrails;

      asteroidGroup.children.forEach((child) => {
        if (child.userData.orbitLayout) {
          child.position.copy(getOrbitPosition(child.userData.orbitLayout, simulatedDays));
          child.rotation.x = simulatedDays * Math.PI * 2 * 0.3;
          child.rotation.y = simulatedDays * Math.PI * 2 * 0.5;
        }
        if (child.userData.follows) {
          child.position.copy(child.userData.follows.position);
          if (child.userData.label) {
            child.visible = current.showLabels;
            child.position.y += child.userData.follows.userData.selected ? 0.55 : 0.38;
          } else {
            child.visible = current.showHud;
            child.lookAt(camera.position);
            const scale = child.userData.selected ? 1.35 : 0.82;
            child.scale.setScalar(scale);
          }
        }
        if (child.userData.kind === "orbit") {
          child.visible = current.showTrails;
        }
      });
      renderer.render(scene, camera);
    }

    animate();

    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    });
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      sphereGeometry.dispose();
      earth.material.dispose();
      atmosphere.material.dispose();
      controls.dispose();
      renderer.dispose();
      earthTextures.dayTexture.dispose();
      earthTextures.nightTexture.dispose();
      earthTextures.bumpRoughnessCloudsTexture.dispose();
      sceneRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    const sceneState = sceneRef.current;
    if (!sceneState) return;
    sceneState.asteroidGroup.clear();
    const current = { objects, selectedId, progress, playing, showGrid, showTrails, showLabels, showHud };
    objects.forEach((object, index) => {
      sceneState.asteroidGroup.add(...createAsteroidVisual(object, index, current.selectedId));
    });
  }, [objects, selectedId]);

  return <div className="scene-mount" ref={mountRef} aria-label="3D asteroid approach visualization" />;
}

function StatusHeader({ date, count, source, status }) {
  const now = new Date();
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">
          <Radar size={25} strokeWidth={1.7} />
        </div>
        <div>
          <h1>Asteroid Alert</h1>
          <span>Live NEO Monitoring</span>
        </div>
      </div>
      <div className="top-stat">
        <Activity size={15} />
        <span className={status === "live" ? "green" : "amber"}>{status === "live" ? "System nominal" : "Seed data active"}</span>
      </div>
      <div className="top-stat hide-small">
        <Database size={15} />
        <span>{source}</span>
      </div>
      <div className="top-stat hide-medium">
        <Satellite size={15} />
        <span>
          {date} · {count} objects
        </span>
      </div>
      <div className="top-time">{now.toISOString().slice(0, 16).replace("T", " ")} UTC</div>
    </header>
  );
}

function ObjectList({ objects, selectedId, onSelect }) {
  return (
    <section className="panel object-list">
      <div className="panel-title">
        <span>Near-Earth Objects</span>
        <strong>Danger ranked</strong>
      </div>
      <div className="table-head">
        <span>Name</span>
        <span>Risk</span>
        <span>Miss LD</span>
        <span>Diam m</span>
      </div>
      <div className="object-rows">
        {objects.map((object) => {
          const danger = scoreObject(object);
          return (
            <button className={`object-row ${object.id === selectedId ? "selected" : ""}`} key={object.id} type="button" onClick={() => onSelect(object.id)}>
              <span className="rock-chip" style={{ "--accent": ORBIT_COLORS[object.orbit] || "#ffffff" }} />
              <span className="object-name">
                {object.name}
                <small>
                  {dangerLabel(danger)} · {formatNumber(object.velocity_kps, 1)} km/s
                </small>
              </span>
              <span className={`danger-score ${danger >= 55 ? "elevated" : ""}`}>{danger}</span>
              <span>{formatNumber(object.miss_lunar, 1)}</span>
              <span>
                {Math.round(object.diameter_m[0])}-{Math.round(object.diameter_m[1])}
              </span>
            </button>
          );
        })}
      </div>
      <div className="legend">
        <div>
          <span className="line selected-line" /> Higher score = more danger
        </div>
        <div>
          <span className="line earth-line" /> Earth orbit
        </div>
        <div>
          <span className="line orbit-line" /> Asteroid orbit
        </div>
      </div>
    </section>
  );
}

function RiskGauge({ value, label, max = 100, suffix = "" }) {
  const clamped = Math.max(0, Math.min(value / max, 1));
  return (
    <div className="gauge-card">
      <div className="gauge-ring" style={{ "--fill": `${clamped * 270}deg` }}>
        <span>
          {formatNumber(value, value < 10 ? 1 : 0)}
          {suffix}
        </span>
      </div>
      <small>{label}</small>
    </div>
  );
}

function ApproachChart({ lookup, selected }) {
  const points = selected.id === lookup.id ? lookup.nearest : [];
  if (!points.length) {
    return (
      <div className="current-pass-card">
        <div>
          <span>Approach time</span>
          <strong>{selected.time || "No approach time"}</strong>
        </div>
        <div>
          <span>Miss distance</span>
          <strong>{formatNumber(selected.miss_lunar, 1)} LD</strong>
        </div>
        <div>
          <span>Velocity</span>
          <strong>{formatNumber(selected.velocity_kps, 1)} km/s</strong>
        </div>
      </div>
    );
  }
  const chartPoints = points;
  const max = Math.max(...chartPoints.map((point) => point.miss_lunar), 1);
  return (
    <div className="approach-chart">
      {chartPoints.map((point, index) => {
        const height = 18 + (1 - point.miss_lunar / max) * 72;
        return (
          <div className="approach-bar" key={`${point.date}-${index}`}>
            <span style={{ height: `${height}%` }} />
            <small>{point.date.slice(2, 4)}</small>
          </div>
        );
      })}
    </div>
  );
}

function Inspector({ selected, lookup }) {
  const riskScore = scoreObject(selected);
  const isLookup = selected.id === lookup.id;
  const meanDiameter = (selected.diameter_m[0] + selected.diameter_m[1]) / 2;
  return (
    <aside className="panel inspector">
      <div className="panel-title">
        <span>Selected Object</span>
        <strong>{selected.orbit}</strong>
      </div>
      <div className="selected-heading">
        <div>
          <h2>{selected.name.replace(/[()]/g, "")}</h2>
          <p>{selected.time || "No approach time"}</p>
        </div>
        <div className={`risk-box ${riskScore > 60 ? "hot" : ""}`}>
          <strong>{riskScore}</strong>
          <span>Risk</span>
        </div>
      </div>
      <div className="metric-strip">
        <div>
          <Target size={20} />
          <span>{formatNumber(selected.miss_lunar, 1)} LD</span>
          <small>Miss distance</small>
        </div>
        <div>
          <Gauge size={20} />
          <span>{formatNumber(selected.velocity_kps, 1)} km/s</span>
          <small>Velocity</small>
        </div>
        <div>
          <Crosshair size={20} />
          <span>{formatNumber(selected.moid, 3)} AU</span>
          <small>MOID</small>
        </div>
      </div>
      <div className="gauges">
        <RiskGauge value={meanDiameter} max={120} label="Est. diameter" suffix="m" />
        <RiskGauge value={selected.velocity_kps} max={25} label="Relative velocity" />
      </div>
      <div className="details-grid">
        <span>Orbit class</span>
        <strong>{isLookup ? lookup.orbit_class?.orbit_class_type : selected.orbit}</strong>
        <span>Eccentricity</span>
        <strong>{formatNumber(selected.eccentricity, 3)}</strong>
        <span>Uncertainty</span>
        <strong>{selected.uncertainty}</strong>
        <span>Period</span>
        <strong>{formatNumber(selected.period_days, 1)} days</strong>
      </div>
      <div className="history-block">
        <div className="history-title">
          <span>{isLookup ? `${lookup.approach_count} close approaches` : "Current pass only"}</span>
          <strong>{isLookup ? "JR100 dossier" : "Feed object"}</strong>
        </div>
        <ApproachChart lookup={lookup} selected={selected} />
      </div>
      {isLookup && (
        <div className="lookup-note">
          <span>Observation arc</span>
          <strong>
            {lookup.orbit.first_observation_date} to {lookup.orbit.last_observation_date}
          </strong>
        </div>
      )}
    </aside>
  );
}

function TimelineControls({ progress, setProgress, playing, setPlaying, speed, setSpeed }) {
  return (
    <section className="panel controls">
      <div className="control-buttons">
        <button type="button" onClick={() => setProgress(0)} aria-label="Jump to start">
          <SkipBack size={18} />
        </button>
        <button type="button" onClick={() => setProgress((value) => Math.max(0, value - 0.08))} aria-label="Rewind">
          <Rewind size={18} />
        </button>
        <button className="primary-control" type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause" : "Play"}>
          {playing ? <Pause size={19} /> : <Play size={19} />}
        </button>
        <button type="button" onClick={() => setProgress((value) => Math.min(1, value + 0.08))} aria-label="Fast forward">
          <FastForward size={18} />
        </button>
        <button type="button" onClick={() => setProgress(1)} aria-label="Jump to end">
          <SkipForward size={18} />
        </button>
      </div>
      <div className="timeline">
        <label htmlFor="time-scrub">Timeline scrubber</label>
        <input id="time-scrub" type="range" min="0" max="100" value={Math.round(progress * 100)} onChange={(event) => setProgress(Number(event.target.value) / 100)} />
        <div className="ticks">
          <span>T-12h</span>
          <strong>Approach window</strong>
          <span>T+12h</span>
        </div>
      </div>
      <div className="speed-control">
        <label htmlFor="speed">Speed</label>
        <select id="speed" value={speed} onChange={(event) => setSpeed(Number(event.target.value))}>
          <option value="0.5">0.5x</option>
          <option value="1">1.0x</option>
          <option value="1.8">1.8x</option>
          <option value="3">3.0x</option>
        </select>
      </div>
    </section>
  );
}

function DisplayOptions({ showGrid, setShowGrid, showTrails, setShowTrails, showLabels, setShowLabels, showHud, setShowHud }) {
  const options = [
    { label: "Orbits", active: showTrails, set: setShowTrails, icon: Radar },
    { label: "Labels", active: showLabels, set: setShowLabels, icon: List },
    { label: "Grid", active: showGrid, set: setShowGrid, icon: Grid3X3 },
    { label: "HUD", active: showHud, set: setShowHud, icon: Crosshair },
  ];
  return (
    <div className="display-options">
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <button key={option.label} className={option.active ? "active" : ""} type="button" onClick={() => option.set((value) => !value)} aria-pressed={option.active}>
            <Icon size={18} />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function App() {
  const { feed, lookup, source, status } = useNeoData();
  const [selectedId, setSelectedId] = React.useState(null);
  const [progress, setProgress] = React.useState(0.42);
  const [playing, setPlaying] = React.useState(true);
  const [speed, setSpeed] = React.useState(1);
  const [showGrid, setShowGrid] = React.useState(true);
  const [showTrails, setShowTrails] = React.useState(true);
  const [showLabels, setShowLabels] = React.useState(true);
  const [showHud, setShowHud] = React.useState(true);

  const objects = React.useMemo(() => [...(feed.objects.length ? feed.objects : FALLBACK_FEED.objects)].sort((a, b) => scoreObject(b) - scoreObject(a)), [feed.objects]);
  const selected = objects.find((object) => object.id === selectedId) || objects[0];

  React.useEffect(() => {
    if (!playing) return undefined;
    const interval = window.setInterval(() => {
      setProgress((value) => (value + speed / (BASELINE_WINDOW_SECONDS * 25)) % 1);
    }, 40);
    return () => window.clearInterval(interval);
  }, [playing, speed]);

  React.useEffect(() => {
    if (!selectedId || !objects.some((object) => object.id === selectedId)) {
      setSelectedId(objects[0]?.id);
    }
  }, [objects, selectedId]);

  return (
    <main className="app-shell">
      <StatusHeader date={feed.date} count={feed.count} source={source} status={status} />
      <div className="workspace">
        <ObjectList objects={objects} selectedId={selected.id} onSelect={setSelectedId} />
        <section className={`scene-panel ${showGrid ? "" : "grid-off"} ${showHud ? "" : "hud-off"}`}>
          <AsteroidScene objects={objects} selectedId={selected.id} progress={progress} playing={playing} showGrid={showGrid} showTrails={showTrails} showLabels={showLabels} showHud={showHud} />
          {showHud && (
            <>
              <div className="scene-overlay top-left">1 LD = 384,399 km</div>
              <div className="scene-overlay bottom-right">Selected trajectory: {selected.name}</div>
            </>
          )}
        </section>
        <Inspector selected={selected} lookup={lookup} />
      </div>
      <footer className="bottom-deck">
        <TimelineControls progress={progress} setProgress={setProgress} playing={playing} setPlaying={setPlaying} speed={speed} setSpeed={setSpeed} />
        <DisplayOptions
          showGrid={showGrid}
          setShowGrid={setShowGrid}
          showTrails={showTrails}
          setShowTrails={setShowTrails}
          showLabels={showLabels}
          setShowLabels={setShowLabels}
          showHud={showHud}
          setShowHud={setShowHud}
        />
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
