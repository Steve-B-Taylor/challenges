class Artist {
  constructor(name, albums, genres) {
    this.name = name;
    this.albums = albums || []; // albums array
    this.genres = genres || []; // genres array
  }
  addAlbums(album) {
    this.albums.push(album);
  }
  addGenres(genres) {
    this.genres.push(genres);
  }
}

export default Artist;
