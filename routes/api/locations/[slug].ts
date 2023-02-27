import { Handlers } from "$fresh/server.ts";
import { controller } from "@/utils/controller.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    console.log(new URL(_req.url));
    return await controller("locations", ctx);
  },
};
