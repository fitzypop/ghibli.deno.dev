import { validateUUID } from "@/utils/validate.ts";
import { selectAll, selectSingle } from "@/utils/supabase.ts";
import { PostgrestError } from "https://esm.sh/v108/@supabase/postgrest-js@1.4.1/dist/module/types";

function selectErrorResponse(error: PostgrestError, id?: string) {
  const body = { status: 500, message: error.message };
  return _baseResponseHandler(body, { id });
}

function notFoundResponse(message: string, id?: string) {
  const body = { message: message, status: 404 };
  return _baseResponseHandler(body, { id });
}

function _baseResponseHandler(
  body: any,
  options?: { id?: string | null },
) {
  if (options?.id) {
    body.id = options.id;
  }
  return new Response(
    JSON.stringify(body),
    {
      status: body.status,
    },
  );
}

export async function getSingleAction(
  enpointName: string,
  requestUrl: string,
  id: string,
) {
  if (!validateUUID(id)) {
    const msg = `invalid ${enpointName} id`;
    console.error(`${msg}: ${id}`); // TODO maybe log to supabase?
    return notFoundResponse(msg, id);
  }

  const { data, error } = await selectSingle(enpointName, id, {
    ...getQueryParams(requestUrl),
  });

  if (error) {
    console.error(error);
    return selectErrorResponse(error, id);
  }
  return new Response(JSON.stringify(data));
}

export async function getAllAction(endpointName: string, requestUrl: string) {
  const { data, error } = await selectAll(endpointName, {
    ...getQueryParams(requestUrl),
  });
  if (error) {
    console.error(error);
    return selectErrorResponse(error);
  }

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
