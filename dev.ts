#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
// set .env in app
import "https://deno.land/std@0.178.0/dotenv/load.ts";

await dev(import.meta.url, "./main.ts");
