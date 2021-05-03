ALTER TABLE products
ADD COLUMN category_id INTEGER NOT NULL REFERENCES categories(id);