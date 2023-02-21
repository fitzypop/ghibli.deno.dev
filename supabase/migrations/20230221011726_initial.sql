create table "public"."films" (
    "id" uuid not null,
    "name" text not null
);


alter table "public"."films" enable row level security;

create table "public"."locations" (
    "id" uuid not null
);


alter table "public"."locations" enable row level security;

create table "public"."people" (
    "id" uuid not null
);


alter table "public"."people" enable row level security;

create table "public"."species" (
    "id" uuid not null
);


alter table "public"."species" enable row level security;

create table "public"."vehicles" (
    "id" uuid not null
);


alter table "public"."vehicles" enable row level security;

CREATE UNIQUE INDEX films_pkey ON public.films USING btree (id);

CREATE UNIQUE INDEX locations_pkey ON public.locations USING btree (id);

CREATE UNIQUE INDEX people_pkey ON public.people USING btree (id);

CREATE UNIQUE INDEX species_pkey ON public.species USING btree (id);

CREATE UNIQUE INDEX vehicles_pkey ON public.vehicles USING btree (id);

alter table "public"."films" add constraint "films_pkey" PRIMARY KEY using index "films_pkey";

alter table "public"."locations" add constraint "locations_pkey" PRIMARY KEY using index "locations_pkey";

alter table "public"."people" add constraint "people_pkey" PRIMARY KEY using index "people_pkey";

alter table "public"."species" add constraint "species_pkey" PRIMARY KEY using index "species_pkey";

alter table "public"."vehicles" add constraint "vehicles_pkey" PRIMARY KEY using index "vehicles_pkey";


