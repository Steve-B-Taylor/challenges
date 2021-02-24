class Player {
  constructor(songs) {
    this.songs = songs;
    this.isRandom = false;
  }
  play() {
    if (this.isRandom) {
      this.random();
    } else {
      this.songs.forEach((song) => {
        song.play();
        console.log(
          `Now playing: "${song.title}", duration: ${song.duration} minutes.`
        );
        song.stop();
      });
    }
  }
  random() {
    let rndSong = true;
    let shuffleTracks = this.songs;
    let song;
    let rTrackNum;

    while (shuffleTracks.length > 0) {
      rTrackNum = Math.floor(Math.random() * this.songs.length);
      song = shuffleTracks.splice(rTrackNum, 1)[0];
      song.play();
      console.log(
        `Now playing: "${song.title}", duration: ${song.duration} minutes.`
      );
      song.stop();
    }
    // console.log(`foo:  ${this.songs.length}`);
    // console.log(this.songs[randomTrack].title);
    // this.play(this.songs[randomTrack].title);
    // this.play();
  }
}

export default Player;
