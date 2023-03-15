import { createClient } from "https://esm.sh/@supabase/supabase-js@2.8.0";

export const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!,
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
  id: string,
  options?: {
    fields?: string | null;
  },
) {
  return await supabase.from(tableName).select(options?.fields || "*").eq(
    "id",
    id,
  ).single();
}
