import { Handlers } from "$fresh/server.ts";
import { getSingleAction } from "@/utils/actions.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await getSingleAction("films", req.url, ctx.params.slug);
  },
};
