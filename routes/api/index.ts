import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    return new Response(
      JSON.stringify({ message: "top level route for ghibliapi-deno" }),
    );
  },
};
