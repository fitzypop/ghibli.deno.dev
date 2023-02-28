import { createClient } from "https://esm.sh/@supabase/supabase-js@2.8.0";
// import { PostgrestError } from "https://esm.sh/v108/@supabase/supabase-js@2.8.0/dist/module/index";

export const supabase = createClient(
  Deno.env.get("SUPABASE_URL") || "url not found",
  Deno.env.get("SUPABASE_ANON_KEY") || "anon key nout found",
);

export async function selectAll(
  tableName: string,
  options?: {
    fields?: string | null;
    limit?: string | null;
  },
) {
  let query = supabase.from(tableName).select(options?.fields || "*");
  // TODO test this, think i'm forgetting something
  const limit = Number(options?.limit);
  if (limit) {
    query = query.limit(limit);
  }

  return await query;
}

export async function selectSingle(
  tableName: string,
  options?: {
    fields?: string | null;
  },
) {
  return await supabase.from(tableName).select(options?.fields || "*").single();
}

// export function handleQueryError(error: PostgrestError | null) {
// }
