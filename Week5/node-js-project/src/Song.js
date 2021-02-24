class Song {
  constructor(title, artist, duration, album, genre) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.album = album || "";
    this.genre = genre || "";
    this.isPlaying = false;
  }
  play() {
    this.isPlaying = true;
    return this.isPlaying;
  }
  stop() {
    this.isPlaying = false;
    return this.isPlaying;
  }
}

export default Song;
