import { Handlers } from "$fresh/server.ts";
import { getAllAction } from "~/utils/actions.ts";
import data from "~/routes/data.json" assert { type: "json" };
export const handler: Handlers = {
  async GET(req, _ctx) {
    // return await getAllAction("locations", req.url);
    return new Response(JSON.stringify(data.locations));
  },
};
