/// This is a script to port data.json to seed.sql
/// i.e. turn json data into a postgres insert query for supabase

// deno run -A migrate.ts

async function parseDataFile(file) {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(file);
  return JSON.parse(decoder.decode(data));
}

async function saveFile(name, data) {
  const encoder = new TextEncoder();
  await Deno.writeFile(name, encoder.encode(data));
}

function parray(arr) {
  return `ARRAY [${arr.map((o) => ` '${o}'`)} ]`;
}

function start(name, arr) {
  return `insert into public.${name} (${arr.map((a) => `"${a}"`)}) values`;
}

function end() {
  return ";";
}

function process(jsonData, name) {
  const data = jsonData[name];
  const keys = Object.keys(data[0]);

  let mStr = start(name, keys);

  for (const d of data) {
    mStr += ` ( `;
    for (const k of keys) {
      mStr += Array.isArray(d[k])
        ? parray(d[k])
        : `'${d[k].replaceAll("'", "")}'`;
      if (keys.length - 1 !== keys.indexOf(k)) {
        mStr += `,`;
      }
    }
    mStr += `)` + (data.length - 1 !== data.indexOf(d) ? `,` : ``);
  }

  mStr += end();
  return mStr;
}

async function main() {
  const data = await parseDataFile("data.json");

  const insert = process(data, "films") + process(data, "people") +
    process(data, "locations") + process(data, "species") +
    process(data, "vehicles");

  await saveFile("../seed.sql", insert);
}

await main();
