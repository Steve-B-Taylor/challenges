DROP TABLE IF EXISTS concert_venues;
CREATE TABLE concert_venues (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  capacity INTEGER NOT NULL
);