import Song from "./src/Song.js";
import Album from "./src/Album.js";
import Artist from "./src/Artist.js";
import Player from "./src/Player.js";

let floyd = new Artist("Pink Floyd");
let wallAlbum = "The Wall";
let wallGenre = "Rock";

let theWallSongs = [
  new Song("In the Flesh?", floyd, 4, wallAlbum, wallGenre),
  new Song("The Thin Ice", floyd, 3, wallAlbum, wallGenre),
  new Song("Another Brick in the Wall, Part 1", floyd, 4, wallAlbum, wallGenre),
  new Song("The Happiest Days of Our Lives", floyd, 2, wallAlbum, wallGenre),
  new Song("Another Brick in the Wall, Part 2", floyd, 4, wallAlbum, wallGenre),
  new Song("Mother", floyd, 6, wallAlbum, wallGenre),
  new Song("Goodbye Blue Sky", floyd, 3, wallAlbum, wallGenre),
  new Song("Empty Spaces", floyd, 3, wallAlbum, wallGenre),
  new Song("Young Lust", floyd, 4, wallAlbum, wallGenre),
  new Song("One of My Turns", floyd, 4, wallAlbum, wallGenre),
  new Song("Don't Leave Me Now", floyd, 5, wallAlbum, wallGenre),
  new Song("Another Brick in the Wall, Part 3", floyd, 2, wallAlbum, wallGenre),
  new Song("Goodbye Cruel World", floyd, 2, wallAlbum, wallGenre),
  new Song("Hey You", floyd, 5, wallAlbum, wallGenre),
  new Song("Is There Anybody Out There?", floyd, 3, wallAlbum, wallGenre),
  new Song("Nobody Home", floyd, 4, wallAlbum, wallGenre),
  new Song("Vera", floyd, 2, wallAlbum, wallGenre),
  new Song("Bring the Boys Back Home", floyd, 2, wallAlbum, wallGenre),
  new Song("Comfortably Numb", floyd, 7, wallAlbum, wallGenre),
  new Song("The Show Must Go On", floyd, 2, wallAlbum, wallGenre),
  new Song("In the Flesh", floyd, 3, wallAlbum, wallGenre),
  new Song("Run Like Hell", floyd, 5, wallAlbum, wallGenre),
  new Song("Waiting for the Worms", floyd, 5, wallAlbum, wallGenre),
  new Song("Stop", floyd, 1, wallAlbum, wallGenre),
  new Song("The Trial", floyd, 6, wallAlbum, wallGenre),
  new Song("Outside the Wall", floyd, 2, wallAlbum, wallGenre),
];

let theWall = new Album(wallAlbum, theWallSongs);
floyd.addAlbums(theWall);

console.log(`${theWall.name} duration:  ${theWall.duration()} minutes`);
console.log(`Number of tracks:  ${theWall.trackCount()}`);
console.log(`${theWall.name} is playing:  ${theWall.isPlaying()}\n`);
// console.log(theWall.removeSong("Hey You"));  // this is still broke
// console.log(theWall);

let songs = [...theWallSongs];
let player = new Player(songs);
// player.play();
// player.random();

function albumSearch(artist, string) {
  let findAlbum = artist.albums.find((album) => album.name === string);
  if (findAlbum) {
    return findAlbum;
  } else {
    console.log(`"${string}" not found`);
    return false;
  }
}
// console.log(albumSearch(floyd, "The Wall")); // success
// console.log(albumSearch(floyd, "The Walle")); // fail

function songSearch(album, string) {
  let findSong = album.songList.find((song) => song.title === string);
  if (findSong) {
    return findSong;
  } else {
    console.log(`"${string}" not found`);
    return false;
  }
}

// console.log(songSearch(theWall, "Run Like Hell")); // success
// console.log(songSearch(theWall, "Ran Like Hell")); // fail
