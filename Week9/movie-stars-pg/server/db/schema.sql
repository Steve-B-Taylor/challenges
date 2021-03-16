-- Your code here
DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);

INSERT INTO movies (title, genre, description)
VALUES 
('Mystery Men', 'EPIC-EST EVAR SUPAH-HERO', 'A motley band of misfit nobodies join forces to SAVE TEH WORLD!'),
('The Incredibles', 'Family', 'Super hero family emerges from a quiet life to thwart a notorious villain'),
('The Sandlot', 'Family', 'A boy who moves in to a new town befrieds a group of baseball playing boys')