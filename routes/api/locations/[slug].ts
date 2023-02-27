import { Handlers } from "$fresh/server.ts";
import { supabase } from "@/utils/supabase.ts";
import { validateUUID } from "@/utils/validate.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const locationId = ctx.params.slug;
    if (!validateUUID) {
      console.error("invalid location id", locationId);
      return new Response(JSON.stringify({ error: "invalid species id" }), {
        status: 500,
      });
    }

    const { data, error } = await supabase.from("locations").select().eq(
      "id",
      locationId,
    ).single();

    if (error) console.error(error);
    return new Response(JSON.stringify(data));
  },
};
