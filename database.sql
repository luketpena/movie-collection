-- This table tracks the movies the user has put in
-- REFERENCES "genre" table
CREATE TABLE movie (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(128),
	"genre_id" integer REFERENCES genre,
	"date" DATE,
	"img_url" VARCHAR(1024),
	"runtime" INT
);

-- This table stores single words for genres
-- IS REFERENCED BY "movie" table
CREATE TABLE "genre" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(32)
);

-- Test data for genres:
INSERT INTO "genre" ("name") VALUES ('Sci-Fi'), ('Adventure'), ('Fantasy'), ('Drama'), ('Comedy');

-- Test data for movies:
INSERT INTO "movie" ("name","genre_id","date","img_url","runtime") VALUES
	('Star Wars',1,'04/25/1977','https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',121),
	('Star Wars: Episode V - The Empire Strikes Back',1,'05/20/1980','https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',124),
	('Groundhog Day',5,'02/12/1993','https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',101);