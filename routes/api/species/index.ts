import { Handlers } from "$fresh/server.ts";
import { supabase } from "@/utils/supabase.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const { data, error } = await supabase.from("species").select();
    if (error) console.error(error);
    return new Response(JSON.stringify(data));
  },
};
