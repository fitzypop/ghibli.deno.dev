default: start

start:
    supabase start
    deno task start

check:
    deno task check

migrate target:
    supabase db diff --use-migra -f {{target}}
