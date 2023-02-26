alter table "public"."films" drop column "name";

alter table "public"."films" add column "description" text;

alter table "public"."films" add column "director" text;

alter table "public"."films" add column "image" text;

alter table "public"."films" add column "locations" text[];

alter table "public"."films" add column "movie_banner" text;

alter table "public"."films" add column "original_title" text;

alter table "public"."films" add column "original_title_romanised" text;

alter table "public"."films" add column "people" text[];

alter table "public"."films" add column "producer" text;

alter table "public"."films" add column "release_date" text;

alter table "public"."films" add column "rt_score" text;

alter table "public"."films" add column "running_time" text;

alter table "public"."films" add column "species" text[];

alter table "public"."films" add column "title" text;

alter table "public"."films" add column "url" text;

alter table "public"."films" add column "vehicles" text[];

alter table "public"."locations" add column "climate" text;

alter table "public"."locations" add column "films" text[];

alter table "public"."locations" add column "name" text;

alter table "public"."locations" add column "residents" text[];

alter table "public"."locations" add column "terrain" text;

alter table "public"."locations" add column "url" text;

alter table "public"."people" add column "age" text;

alter table "public"."people" add column "eye_color" text;

alter table "public"."people" add column "films" text[];

alter table "public"."people" add column "gender" text;

alter table "public"."people" add column "hair_color" text;

alter table "public"."people" add column "name" text;

alter table "public"."people" add column "species" text;

alter table "public"."people" add column "url" text;

alter table "public"."vehicles" add column "description" text;

alter table "public"."vehicles" add column "films" text[];

alter table "public"."vehicles" add column "length" text;

alter table "public"."vehicles" add column "name" text;

alter table "public"."vehicles" add column "pilot" text;

alter table "public"."vehicles" add column "url" text;

alter table "public"."vehicles" add column "vehicle_class" text;
