import { Handlers } from "$fresh/server.ts";
import { controller, getQueryParams } from "@/utils/controller.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await controller("films", req, ctx);
  },
};
