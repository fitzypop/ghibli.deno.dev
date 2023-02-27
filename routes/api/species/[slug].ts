import { Handlers } from "$fresh/server.ts";
import { supabase } from "@/utils/supabase.ts";
import { validateUUID } from "@/utils/validate.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const speciesId = ctx.params.slug;
    if (!validateUUID) {
      console.error("invalid species id", speciesId);
      return new Response(JSON.stringify({ error: "invalid species id" }), {
        status: 500,
      });
    }

    const { data, error } = await supabase.from("species").select().eq(
      "id",
      speciesId,
    ).single();
    if (error) console.error(error);
    return new Response(JSON.stringify(data));
  },
};
