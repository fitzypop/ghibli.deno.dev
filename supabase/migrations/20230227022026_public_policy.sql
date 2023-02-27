create policy "Enable read access for all users" on "public"."films" as permissive for
select to public using (true);
create policy "Enable read access for all users" on "public"."locations" as permissive for
select to public using (true);
create policy "Enable read access for all users" on "public"."people" as permissive for
select to public using (true);
create policy "Enable read access for all users" on "public"."species" as permissive for
select to public using (true);
create policy "Enable read access for all users" on "public"."vehicles" as permissive for
select to public using (true);
