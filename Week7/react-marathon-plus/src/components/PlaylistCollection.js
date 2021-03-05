import React, { useState } from "react";
import Playlist from "./Playlist";

const PlaylistCollection = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const playlistList = props.playlists.map((list) => {
    const handleClick = () => {
      if (selectedPlaylist === list.id) {
        setSelectedPlaylist(null);
      } else {
        setSelectedPlaylist(list.id);
      }
    };

    let selectedStatus = false;
    if (selectedPlaylist === list.id) {
      selectedStatus = true;
    }

    return (
      <Playlist
        key={list.id}
        data={list}
        onClick={handleClick}
        selectedStatus={selectedStatus}
      />
    );
  });

  return (
    <div>
      <span>Playlists</span>
      {playlistList}
    </div>
  );
};

export default PlaylistCollection;
