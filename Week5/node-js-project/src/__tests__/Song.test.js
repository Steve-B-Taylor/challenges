import Song from "../Song.js";

describe("A Song", () => {
  let song;
  let songTitle;
  let artist;
  let duration;
  let album;
  let genre;
  let isPlaying;

  beforeEach(() => {
    songTitle = "In the Flesh?";
    artist = "Pink Floyd";
    duration = 4;
    album = "The Wall";
    genre = "Rock";
    isPlaying = false;
    song = new Song(songTitle, artist, duration, album, genre, isPlaying);
  });

  it("defines song", () => {
    expect(song).toBeInstanceOf(Song);
  });

  it("is instantiated with a Title", () => {
    expect(song.title).toEqual(songTitle);
  });

  it("is instantiated with a Artist", () => {
    expect(song.artist).toEqual(artist);
  });

  it("is instantiated with a song Duration", () => {
    expect(song.duration).toEqual(duration);
  });

  it("is instantiated with a Album", () => {
    expect(song.album).toEqual(album);
  });

  it("is instantiated with a Genre", () => {
    expect(song.genre).toEqual(genre);
  });

  it("is instantiated with a isPlaying", () => {
    expect(song.isPlaying).toEqual(isPlaying);
  });

  it("starts a song", () => {
    song.play();
    expect(song.isPlaying).toEqual(true);
  });

  it("stops a song", () => {
    song.stop();
    expect(song.isPlaying).toEqual(false);
  });
  // describe("#speak", () => {
  //   it("speaks its tagline", () => {
  //     expect(gorilla.speak()).toEqual("Bob got a bad feeling about this...");
  //   });
  // });

  // it("makes sure you didn't hardcode the gorilla's name", () => {
  //   let koko = new Gorilla("Koko");
  //   expect(koko.name).toEqual("Koko");
  // });
});
