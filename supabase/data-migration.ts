// import { createClient } from 'https://deno.land/x/supabase@1.3.1/mod.ts';
// const supaClient = createClient('url.com', 'anon-key');

async function parseDataFile(file?: string) {
  if (!file) file = "data.json";
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(file);
  return JSON.parse(decoder.decode(data));
}

function parray<T>(obj: Array<T>) {
  if (obj.length === 1 && (obj[0].endsWith("/") || obj[0] === "TODO")) {
    return null;
  }
  return `ARRAY [${obj.map((o) => ` \`${o}\``)} ]`;
}

function start(name: string, list: Array<string>) {
  return `insert into public.${name} (${list}) values`;
}

function end() {
  return ";";
}

function process(data, name, keys) {
  let mStr = start(name, keys);
  for (const d of data[name]) {
    mStr += `( `;
    for (const k of keys) {
      mStr += Array.isArray(d[k]) ? parray(d[k]) : `\`${d[k]}\``;
      mStr += ",";
    }
    mStr += "),";
  }
  mStr += end();
  return mStr;
}

async function main() {
  const data = await parseDataFile();

  let insert = process(data, "films", Object.keys(data["films"][0]));

  insert += process(data, "people", Object.keys(data["people"][0]));

  insert += process(data, "locations", Object.keys(data["locations"][0]));

  insert += process(data, "species", Object.keys(data["species"][0]));

  insert += process(data, "vehicles", Object.keys(data["vehicles"][0]));

  const encoder = new TextEncoder();
  await Deno.writeFile("seed.sql", encoder.encode(insert));
}

await main();
