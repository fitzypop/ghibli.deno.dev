import { createClient } from "https://esm.sh/@supabase/supabase-js@2.8.0";

export const supabase = createClient(
  Deno.env.get("SUPABASE_URL") || "url not found",
  Deno.env.get("SUPABASE_ANON_KEY") || "anon key nout found",
);

export async function selectSupabase(
  tableName: string,
  options?: {
    fields?: string | null;
    limit?: string | null;
    single?: boolean | null;
  },
) {
  const limit = options?.limit;
  const single = options?.single;

  let query = supabase.from(tableName).select(options?.fields || "*");
  if (limit && !single && !!Number(limit)) {
    query = query.limit(Number(limit));
  }

  return single ? await query.single() : await query;
}
