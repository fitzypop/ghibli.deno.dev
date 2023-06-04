import { Handlers } from "$fresh/server.ts";
import data from "~/routes/data.json" assert { type: "json" };

export const handler: Handlers = {
  GET(_req, _ctx) {
    // return await getAllAction("films", req.url);
    // console.log(data.films);
    return new Response(JSON.stringify(data.films));
  },
};
