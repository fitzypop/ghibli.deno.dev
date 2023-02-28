import { HandlerContext } from "$fresh/server.ts";
import { supabase } from "@/utils/supabase.ts";
import { validateUUID } from "@/utils/validate.ts";

export async function controller(
  enpointName: string,
  req: Request,
  ctx: HandlerContext,
) {
  const id = ctx.params.slug;

  if (!validateUUID(id)) {
    const msg = `invalid ${enpointName} id`;
    console.error(`${msg}: ${id}`);
    return new Response(JSON.stringify({ error: msg, status: 404, id }), {
      status: 404,
    });
  }

  const { fields } = getQueryParams(req);

  let query = supabase.from(enpointName).select(fields || "*").eq(
    "id",
    id,
  );

  const { data, error } = await query.single();

  // TODO improve error handling here
  if (error) console.error(error);
  return new Response(JSON.stringify(data));
}

export function getQueryParams(req: Request) {
  const url = new URL(req.url);
  return {
    limit: url.searchParams.get("limit"),
    fields: url.searchParams.get("fields"),
  };
}
