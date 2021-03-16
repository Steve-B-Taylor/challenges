-- your sql here

DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands
(
  id SERIAL PRIMARY KEY,
  band_name VARCHAR(255) NOT NULL,
  year_formed INTEGER NOT NULL,
  history TEXT
);

CREATE TABLE albums
(
  id SERIAL PRIMARY KEY,
  album_name VARCHAR(255) NOT NULL,
  release_year INTEGER NOT NULL,
  label VARCHAR(255),
  liner_notes TEXT,
  band_id INTEGER REFERENCES bands(id)
);

CREATE TABLE songs
(
  band_id INTEGER REFERENCES bands(id),
  album_id INTEGER REFERENCES albums(id),
  title VARCHAR(255) NOT NULL,
  single BOOLEAN NOT NULL
);

INSERT INTO bands (band_name, year_formed, history)
VALUES
  ('Pink Floyd', 1965, 'Cool band'),
  ('Mother Love Bone', 1987, 'THE original Seattle grunge band');

INSERT INTO albums (album_name, release_year, label, liner_notes, band_id)
VALUES
  ('Dark Side of the Moon', 1973, 'EMI', NULL, 1),
  ('The Final Cut', 1983, 'EMI', NULL, 1),
  ('Apple', 1990, 'Stardog', NULL, 2),
  ('Mother Love Bone', 1992, 'Stardog', NULL, 2);

INSERT INTO songs (band_id, album_id, title, single)
VALUES
  (1, 1, 'Breathe', FALSE),
  (1, 1, 'Money', FALSE),
  (1, 2, 'The Hero''s return', FALSE),
  (1, 2, 'The Final Cut', FALSE),
  (2, 3, 'This is Shangrila', FALSE),
  (2, 3, 'Stardog Champion', FALSE),
  (2, 4, 'Bone China', FALSE),
  (2, 4, 'Crown of Thorns', FALSE);
