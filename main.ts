import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const envPort = Deno.env.get("PORT");
const aPort = envPort ? Number(envPort) : 8000;

const app = new Application();

app.use((ctx) => {
  ctx.response.body = JSON.stringify({ sup: "nerds!" });
});

console.log(`starting server at: http://localhost:${aPort}`);
await app.listen({ port: aPort });
