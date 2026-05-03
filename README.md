# Asteroid Alert

Asteroid Alert is a 3D web application that provides real-time information about near-Earth objects (NEOs) such as asteroids and comets. It allows users to track the closest approaches of these objects to Earth, view their trajectories, etc.

## Tech Stack

- Vite+
- React
- Three.js
- NASA API

## NASA API

Create `.env.local` with:

```bash
NASA_API_KEY=your_nasa_api_key
```

The app validates `NASA_API_KEY` with Zod before making NASA requests. If the key is missing or invalid, the app uses the local seed snapshot.

`NASA_API_KEY` is read only by the local Node server. The browser calls `/api/neo-data`; the key is not exposed through Vite client env vars.

- [NASA NEO Feed API](https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=DEMO_KEY)
- [NASA NEO Lookup API](https://api.nasa.gov/neo/rest/v1/neo/3126183?api_key=DEMO_KEY)

## Texture Credits

- Earth textures are from [Solar System Scope](https://www.solarsystemscope.com/textures/), distributed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
