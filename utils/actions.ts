import { validateUUID } from "@/utils/validate.ts";
import { selectAll, selectSingle } from "@/utils/supabase.ts";
// import { PostgrestError } from "https://esm.sh/v108/@supabase/supabase-js@2.8.0/dist/module/index";

export async function getSingleAction(
  enpointName: string,
  requestUrl: string,
  id: string,
) {
  if (!validateUUID(id)) {
    const msg = `invalid ${enpointName} id`;
    console.error(`${msg}: ${id}`); // TODO maybe log to supabase?
    return new Response(JSON.stringify({ error: msg, status: 404, id }), {
      status: 404,
    });
  }

  const { data, error } = await selectSingle(enpointName, {
    ...getQueryParams(requestUrl),
  });

  if (error) {
    console.error(error);
    // TODO improve error handling here
    // ie check status and text
  }
  return new Response(JSON.stringify(data));
}

export async function getAllAction(endpointName: string, requestUrl: string) {
  const { data, error } = await selectAll(endpointName, {
    ...getQueryParams(requestUrl),
  });
  if (error) console.error(error);

  return new Response(JSON.stringify(data));
}

export function getQueryParams(requestUrl: string) {
  const url = new URL(requestUrl);
  // TODO add validators
  return {
    limit: url.searchParams.get("limit"),
    fields: url.searchParams.get("fields"),
  };
}

// export function handleQueryError(error: PostgrestError | null) {
// }
