CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  vin VARCHAR(20) UNIQUE,
  year_built INTEGER,
  asking_price INTEGER,
  make VARCHAR(255),
  model VARCHAR(255)
);

