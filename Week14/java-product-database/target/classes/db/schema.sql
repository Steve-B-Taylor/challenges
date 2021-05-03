DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55),
  description TEXT,
  price DOUBLE PRECISION,
  featured BOOLEAN,
  category_name VARCHAR(55)
);