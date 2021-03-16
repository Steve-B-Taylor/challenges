DROP TABLE IF EXISTS books;
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  pageCount INTEGER NOT NULL,
  description VARCHAR(255),
  fiction BOOLEAN
);