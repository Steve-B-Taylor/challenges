class Album {
  constructor(name, songList) {
    this.name = name;
    this.songList = songList || [];
  }
  duration() {
    let runTime = 0;
    this.songList.forEach((song) => {
      runTime += song.duration;
      // console.log(runTime);
    });
    return runTime;
  }
  trackCount() {
    return this.songList.length;
  }
  isPlaying() {
    return this.songList.some((song) => song.isPlaying);
  }
  addSong(aSong) {
    // console.log(`In addSong():  adding "${aSong}"`);
    this.songList.push(aSong);
  }
  removeSong(rSong) {
    // THIS DOES NOT WORK!!?!?!?!!?!  :(
    // console.log(`Removing "${rSong}"`);
    this.songList.filter((song) => song == rSong);
    // console.log(this.songList);
    return this.songList;
  }
}

export default Album;
