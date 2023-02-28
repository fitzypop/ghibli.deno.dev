import { Handlers } from "$fresh/server.ts";
import { supabase } from "@/utils/supabase.ts";
import { getQueryParams } from "../../../utils/controller.ts";

export const handler: Handlers = {
  async GET(req, _ctx) {
    const { fields, limit } = getQueryParams(req);

    let query = supabase.from("films").select(fields || "*");
    if (limit && Number(limit)) query = query.limit(Number(limit));

    const { data, error } = await query;
    if (error) console.error(error);

    return new Response(JSON.stringify(data));
  },
};
