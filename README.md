# DATABASE

CREATE TABLE movie (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(128),
	"genre_id" INT,
	"date" DATE,
	"img_url" VARCHAR(1024),
	"runtime" INT
);