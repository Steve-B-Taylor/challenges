import React, { useState } from "react";
import Song from "./Song";

const SongCollection = (props) => {
  const [selectedSongID, setSelectedSongID] = useState(null);

  const songList = props.songs.map((list) => {
    const handleClick = () => {
      setSelectedSongID(list.id);
    };

    let selectedStatus = false;
    if (selectedSongID === list.id) {
      selectedStatus = true;
    }
    return (
      <Song
        key={list.id}
        data={list}
        onClick={handleClick}
        selectedStatus={selectedStatus}
      />
    );
  });

  return (
    <div>
      <span>Songs</span>
      {songList}
    </div>
  );
};

export default SongCollection;
