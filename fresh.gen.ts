// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/film/[slug].ts";
import * as $1 from "./routes/api/films.ts";
import * as $2 from "./routes/index.tsx";

const manifest = {
  routes: {
    "./routes/api/film/[slug].ts": $0,
    "./routes/api/films.ts": $1,
    "./routes/index.tsx": $2,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
