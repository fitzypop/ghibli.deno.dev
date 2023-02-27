import { Handlers } from "$fresh/server.ts";
import { supabase } from "../../../utils/supabase.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { data, error } = await supabase.from("films").select();
    if (error) console.error(error);
    return new Response(JSON.stringify(data));
  },
};
