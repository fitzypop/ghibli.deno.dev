import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();

const app_port = Deno.env.get("PORT");
const m_port = app_port ? Number(app_port) : 8000;

app.use((ctx) => {
  ctx.response.body = JSON.stringify({ sup: "nerds!" });
});

console.log(`starting server at: http://localhost:${m_port}`);
await app.listen({ port: m_port });
