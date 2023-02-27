import { Handlers } from "$fresh/server.ts";
import { validateUUID } from "@/utils/validate.ts";
import { supabase } from "@/utils/supabase.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const filmId = ctx.params.slug;

    if (!validateUUID(filmId)) {
      console.error("invalid film id", filmId);
      return new Response(JSON.stringify({ error: "invalid film id." }), {
        status: 500,
      });
    }
    const { data, error } = await supabase.from("films").select().eq(
      "id",
      filmId,
    ).single();

    if (error) console.error(error);
    return new Response(JSON.stringify(data));
  },
};
