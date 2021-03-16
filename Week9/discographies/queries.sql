-- Write a query in your queries.sql file to return a list of all of your bands, their albums, and the songs associated with the albums.


SELECT
s.title AS "Song Title",
a.album_name AS "Album Title", 
b.band_name AS "Band Name" 
FROM songs AS s
  JOIN albums AS a on s.band_id = a.band_id
  JOIN bands AS b ON b.id = a.band_id
WHERE a.id = s.album_id