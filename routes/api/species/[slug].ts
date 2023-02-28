import { Handlers } from "$fresh/server.ts";
import { getSingleAction } from "@/utils/actions.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await getSingleAction("species", req.url, ctx.params.slug);
  },
};
