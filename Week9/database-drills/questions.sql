-- your sql here
-- Retrieval
-- What titles were released in 2003?  151
SELECT *
FROM movies
WHERE year = 2003;

-- What titles were released in 2004 and had a rating higher than 90?  13
SELECT *
FROM movies
WHERE year = 2003 AND rating > 90;

-- What actors have the last name of Wilson?  124
SELECT *
FROM actors
WHERE name like '% Wilson';

-- What actors have the first name of Owen?  19
SELECT *
FROM actors
WHERE name like 'Owen %';

-- What studios start with "Fox"?  6
SELECT *
FROM studios
WHERE name like 'Fox%';

-- What studios involve Disney?  11
SELECT *
FROM studios
WHERE name like '%Disney%';

-- What were the top 5 rated movies in 2005?  5
SELECT *
FROM movies
WHERE year = 2005
ORDER BY rating DESC NULLS LAST
LIMIT
5;

-- What were the worst 10 movie titles and their ratings in 2000?  10
SELECT *
FROM movies
WHERE year = 2000
ORDER BY rating
LIMIT 10;

-- Advanced Retrieval
  -- What movie titles were produced by Walt Disney Pictures in 2010?  7
-- movies left
-- studios right

SELECT movies
.title, studios.name
FROM movies
LEFT JOIN studios
ON movies.studio_id = studios.id
WHERE studios.name = 'Walt Disney Pictures' AND year = 2010;

-- Who were the characters in "The Hunger Games"?  45
-- movies left
-- cast_members right

SELECT movies.title, cast_members.character
FROM movies
  JOIN cast_members
  ON cast_members.movie_id = movies.id
WHERE movies.title = 'The Hunger Games' AND cast_members.character IS NOT NULL;

-- Who acted in "The Hunger Games"?  46
SELECT movies.title, actors.name
FROM cast_members
  JOIN movies ON cast_members.movie_id = movies.id
  JOIN actors ON cast_members.actor_id = actors.id
WHERE movies.title = 'The Hunger Games';

-- Who acted in a Star Wars movie? Be sure to include all movies.  257
SELECT movies.title, actors.name
FROM cast_members
  JOIN movies ON cast_members.movie_id = movies.id
  JOIN actors ON cast_members.actor_id = actors.id
WHERE movies.title LIKE 'Star Wars%';

-- What were all of the character names for movies released in 2009?  4741
SELECT cast_members.character AS "Character Name"
FROM cast_members
  JOIN movies ON cast_members.movie_id = movies.id
WHERE movies.year = 2009;

-- What are the character names in the "The Dark Knight Rises"?  22
SELECT cast_members.character AS "Character Name"
FROM cast_members
  JOIN movies ON cast_members.movie_id = movies.id
WHERE movies.title = 'The Dark Knight Rises';

-- What actors and actresses have been hired by Buena Vista?  1663
SELECT actors.name
FROM cast_members
  JOIN actors ON cast_members.actor_id = actors.id
  JOIN movies ON cast_members.movie_id = movies.id
  JOIN studios ON studios.id = movies.studio_id
WHERE studios.name = 'Buena Vista';

-- Updating
-- Troll 2 was the best movie ever. Let's update it to have a rating of 500.
UPDATE movies 
SET rating = 500, updated_at = NOW()
WHERE title = 'Troll 2';

-- "Police Academy 4 - Citizens on Patrol" was underrated. Let's give it a 20.
UPDATE movies
SET rating = 20, updated_at = NOW()
WHERE title = 'Police Academy 4 - Citizens on Patrol';

-- Matt Damon has updated his name to "The Artist Formerly Known as Matt Damon". Let's update the database to reflect this momentous change in the film industry.
UPDATE actors
SET name = 'The Artist Formerly Known as Matt Damon', updated_at = NOW()
WHERE name = 'Matt Damon';

-- Deletion
  -- We want to forget Back to the Future Part III ever happened. Delete only that movie. Be sure to delete correlating cast_member entries first.

DELETE FROM cast_members AS cm USING movies AS m
WHERE m.id = cm.movie_id
  AND m.title = 'Back to the Future Part III';

DELETE FROM movies m
WHERE m.title = 'Back to the Future Part III';

  -- Horror movies are too scary - delete every Horror movie. Don't forget about their correlating cast_members entries.
DELETE FROM cast_members AS cm
WHERE movie_id IN (
  SELECT m.id FROM movies AS m
    JOIN genres AS g ON m.id = g.id
  WHERE g.name = 'Horror');

DELETE FROM movies AS m USING genres g
WHERE m.genre_id = g.id AND g.name = 'Horror'

  -- Ben Affleck movies are also too scary - delete every movie he acted in. Wasn't that therapeutic?
DELETE FROM movies AS m
WHERE m.id IN (
  SELECT cm.movie_id FROM cast_members AS cm
	JOIN actors AS a ON cm.actor_id = a.id
  WHERE a.name = 'Ben Affleck');

  -- Fake news - we're revising history for 20th Century Fox. Delete any movie they produced that has a rating of less than 80.
DELETE FROM movies AS m
WHERE m.studio_id IN (
  SELECT s.id FROM studios AS s
  WHERE s.name = '20th Century Fox' AND m.rating < 80);

-- Schema
  -- We're creating a reviews table so that we can store individual movie reviews. The table should have a description, score from 0-100, author name, and it should relate to a movie. Create the DDL necessary to create this table.
CREATE TABLE reviews
(
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  score INTEGER NOT NULL,
	CONSTRAINT score_Ck CHECK (score BETWEEN 0 AND 100),
  author_name VARCHAR(255),
  movie_id INTEGER REFERENCES movies(id)
);

  -- We're creating a crimes table for all crimes actors or actresses commit. It should include the year of offense, the title of the offense, and it should relate to the actor. Create the DDL necessary to create this table.
CREATE TABLE crimes
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL,
  actor_id INTEGER REFERENCES actors(id)
);