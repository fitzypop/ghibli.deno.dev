import { HandlerContext } from "$fresh/server.ts";
import { supabase } from "@/utils/supabase.ts";
import { validateUUID } from "@/utils/validate.ts";

export async function controller(enpointName: string, ctx: HandlerContext) {
  const id = ctx.params.slug;

  if (!validateUUID(id)) {
    const msg = `invalid ${enpointName} id`;
    console.error(`${msg}: ${id}`);
    return new Response(JSON.stringify({ error: msg, status: 404, id }), {
      status: 404,
    });
  }
  const { data, error } = await supabase.from(enpointName).select().eq(
    "id",
    id,
  ).single();

  if (error) console.error(error);
  return new Response(JSON.stringify(data));
}
