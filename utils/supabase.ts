import { createClient } from "https://esm.sh/@supabase/supabase-js@2.8.0";

export const supabase = createClient(
  Deno.env.get("SUPABASE_URL") || "url not found",
  Deno.env.get("SUPABASE_ANON_KEY") || "anon key nout found",
);
