-- Deploy music-and-friends:structure-de-base to pg

BEGIN;


CREATE TABLE "user" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "pseudo" TEXT,
    "phone" TEXT,
    "email" TEXT NOT NULL UNIQUE, -- CREER UN DOMAINE REGEXP pour email
    "password" TEXT NOT NULL, 
    "city" TEXT NOT NULL
);

CREATE TABLE "band" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "band_name" TEXT NOT NULL,
    "admin_firstname" TEXT,
    "admin_lastname" TEXT,
    "password" TEXT, -- je mets pas unique car ptet que la page band est admin par un musicien déja log
    "description" TEXT,
    "city" TEXT,
    "phone" TEXT, -- CREER UN DOMAINE REGEXP pour phone
    "email" TEXT UNIQUE
);

CREATE TABLE "place" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "city" TEXT,
    "adress" TEXT,
    "phone" TEXT,
    "zipcode" TEXT, -- CREER UN DOMAINE REGEXP pour zipcode
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL
);

CREATE TABLE "ad" (
        "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "title" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "category" TEXT NOT NULL, --ici on attend musicien OU groupe OU lieux
        "instrument" TEXT,
        "style" TEXT ,
        "user_is_author" INT REFERENCES "user"("id"),
        "band_is_author" INT REFERENCES "band"("id"),
        "place_is_author" INT REFERENCES "place"("id")
);

CREATE TABLE "style"(
            "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            "name" TEXT NOT NULL UNIQUE

);

CREATE TABLE "instrument"(
            "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            "name" TEXT NOT NULL UNIQUE
);

CREATE TABLE "user_got_style"(
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "style_id" INTEGER NOT NULL REFERENCES "style"("id"),
    PRIMARY KEY ("user_id","style_id")
);



CREATE TABLE "user_got_band"(
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "band_id" INTEGER NOT NULL REFERENCES "band"("id"),
    PRIMARY KEY ("user_id","band_id")
);

CREATE TABLE "user_got_instrument"(
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "instrument_id" INTEGER NOT NULL REFERENCES "instrument"("id"),
    PRIMARY KEY ("user_id","instrument_id")
);

CREATE TABLE "band_got_style"(
    "band_id" INTEGER NOT NULL REFERENCES "band"("id"),
    "style_id" INTEGER NOT NULL REFERENCES "style"("id"),
    PRIMARY KEY ("band_id","style_id")
);



CREATE TABLE "band_got_user"(
    "band_id" INTEGER NOT NULL REFERENCES "band"("id"),
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    PRIMARY KEY ("band_id","user_id")
);

CREATE TABLE "band_got_instrument"(
    "band_id" INTEGER NOT NULL REFERENCES "band"("id"),
    "instrument_id" INTEGER NOT NULL REFERENCES "instrument"("id"),
    PRIMARY KEY ("band_id","instrument_id")
);

CREATE TABLE "media" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "file_name" TEXT NOT NULL,
    "file_type" TEXT,
    "file_URL" TEXT NOT NULL UNIQUE
);

CREATE TABLE "user_got_media"(
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "media_id" INTEGER NOT NULL REFERENCES "media"("id"),
    PRIMARY KEY ("user_id","media_id")
);

CREATE TABLE "band_got_media"(
    "band_id" INTEGER NOT NULL REFERENCES "band"("id"),
    "media_id" INTEGER NOT NULL REFERENCES "media"("id"),
    PRIMARY KEY ("band_id","media_id")
);










COMMIT;
