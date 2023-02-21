import { createClient } from "https://deno.land/x/supabase@1.3.1/mod.ts";
const supaClient = createClient("url.com", "anon-key");

async function parseDataFile(file?: string) {
  if (!file) file = "../data.json";
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(file);
  return JSON.parse(decoder.decode(data));
}

const data = parseDataFile();
