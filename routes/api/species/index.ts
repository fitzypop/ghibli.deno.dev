import { Handlers } from "$fresh/server.ts";
import { supabase } from "../../../utils/supabase.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { data, error } = await supabase.from("species").select();
    return new Response(JSON.stringify(data));
  },
};
