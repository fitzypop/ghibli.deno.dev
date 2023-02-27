import { Handlers } from "$fresh/server.ts";
import { controller } from "@/utils/controller.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    return await controller("species", ctx);
  },
};
