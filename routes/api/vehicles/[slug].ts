import { Handlers } from "$fresh/server.ts";
import { supabase } from "@/utils/supabase.ts";
import { validateUUID } from "@/utils/validate.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const vehiclesId = ctx.params.slug;
    if (!validateUUID) {
      console.error("invalid vehicle id", vehiclesId);
      return new Response(JSON.stringify({ error: "invalid vehicle id" }), {
        status: 500,
      });
    }

    const { data, error } = await supabase.from("vehicles").select().eq(
      "id",
      vehiclesId,
    ).single();
    if (error) console.error(error);
    return new Response(JSON.stringify(data));
  },
};
