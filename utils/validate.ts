import { validate } from "https://deno.land/std@0.178.0/uuid/mod.ts";

export function validateUUID(id: string) {
  return validate(id);
}

// export function validateCommaStr(param: string) {
//   return false;
// }
