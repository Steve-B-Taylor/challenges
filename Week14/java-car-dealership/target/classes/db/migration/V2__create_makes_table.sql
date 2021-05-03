CREATE TABLE makes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE UNIQUE INDEX makes_name_un_id ON makes(name);