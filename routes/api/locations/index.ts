import { Handlers } from "$fresh/server.ts";
import { getAllAction } from "~/utils/actions.ts";

export const handler: Handlers = {
  async GET(req, _ctx) {
    return await getAllAction("locations", req.url);
  },
};
