import { Handlers } from "$fresh/server.ts";
import { supabase } from "@/utils/supabase.ts";
import { validateUUID } from "@/utils/validate.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const personId = ctx.params.slug;

    if (!validateUUID(personId)) {
      console.error("invalid person id", personId);
      return new Response(JSON.stringify({ error: "invalid person id" }), {
        status: 500,
      });
    }

    const { data, error } = await supabase.from("people").select().eq(
      "id",
      personId,
    ).single();

    if (error) console.error(error);
    return new Response(JSON.stringify(data));
  },
};
