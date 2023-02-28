import { HandlerContext } from "$fresh/server.ts";
import { validateUUID } from "@/utils/validate.ts";
import { selectAll, selectSingle } from "@/utils/supabase.ts";

export async function getSingleAction(
  enpointName: string,
  req: Request,
  ctx: HandlerContext,
) {
  const id = ctx.params.slug;

  if (!validateUUID(id)) {
    const msg = `invalid ${enpointName} id`;
    console.error(`${msg}: ${id}`); // TODO maybe log to supabase?
    return new Response(JSON.stringify({ error: msg, status: 404, id }), {
      status: 404,
    });
  }

  const { data, error } = await selectSingle(enpointName, {
    ...getQueryParams(req),
  });

  if (error) {
    console.error(error);
    // TODO improve error handling here
    // ie check status and text
  }
  return new Response(JSON.stringify(data));
}

export async function getAllAction(endpointName: string, req: Request) {
  const { data, error } = await selectAll(endpointName, {
    ...getQueryParams(req),
  });
  if (error) console.error(error);

  return new Response(JSON.stringify(data));
}

export function getQueryParams(req: Request) {
  const url = new URL(req.url);
  // TODO add validators
  return {
    limit: url.searchParams.get("limit"),
    fields: url.searchParams.get("fields"),
  };
}
