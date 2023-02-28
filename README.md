# Ghibli API - Deno

I'm porting over the og ghibli api to deno and supabase.

![Totoro](https://media.giphy.com/media/ASy3PKVFnk7ZK/giphy.gif)

## Updates

2/28/23 - Getting close to feature parity with the jsonServe ghibliapi.  
2/27/23 - Naive implementation for endpoints completed. Still need to add optional search params.  
2/26/23 - Finally created a functional migration script to parse `data.json` to `seed.sql` for supabase.  

## Features todo

- [x] Migrate data.json to seed.sql for supabase
- [x] Run migrations on commit to main to supabase project
- ~~[ ] Make api with Oak~~
- [x] Make api with Fresh
- [x] Set public policies for tables
- [x] Add supabase keys to env and Deno Deploy
- [x] Query supabase
- [x] Add 'fields' param to endpoints
- [x] Add limit to 'GET ALL' endpoints
- [ ] Add validators for paramr
- [ ] ???
- [ ] PROFIT!
