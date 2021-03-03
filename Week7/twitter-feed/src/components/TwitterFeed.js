import React from "react";
import data from "../constants/data";
import Tweet from "./Tweet";

const TwitterFeed = (props) => {
  const dataMap = data.map((element) => {
    return (
      <Tweet
        key={element.id_str}
        text={element.text}
        user={element.user}
        entities={element.entities.media}
        liked={element.liked}
        favoriteCount={element.favorite_count}
        retweetCount={element.retweet_count}
        retweeted={element.retweeted}
        timestamp={element.timestamp_ms}
      />
    );
  });
  return <div>{dataMap}</div>;
};

export default TwitterFeed;
