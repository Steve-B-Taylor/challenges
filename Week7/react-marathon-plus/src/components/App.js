import React from "react";
import PlaylistCollection from "./PlaylistCollection";
import SongCollection from "./SongCollection";

const App = (props) => {
  const playlists = props.data.playlists;
  const songs = props.data.songs;
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className="grid-x">
        <div className="cell small-6">
          <PlaylistCollection playlists={playlists} />
        </div>
        <div className="cell auto">
          <SongCollection songs={songs} />
        </div>
      </div>
    </div>
  );
};

export default App;
