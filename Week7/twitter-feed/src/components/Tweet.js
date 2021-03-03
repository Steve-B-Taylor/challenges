import React from "react";

const Tweet = (props) => {
  const entityData = props.entities;
  const userData = props.user;

  let ts = parseInt(props.timestamp);
  let [day, month, date] = new Date(ts).toDateString("en-US").split(" ");
  // let date = new Date(ts);
  console.log(`${month} ${date}`);

  let mediaUrl = "";
  let retweet = "fas fa-retweet tweetMeta-gap";
  let liked = "fas fa-heart tweetMeta-gap";

  if (entityData) {
    mediaUrl = <img src={entityData[0].media_url} />;
  }

  if (props.retweeted) {
    retweet += " retweet";
  }

  if (props.liked) {
    liked += " liked";
  }

  const clickReply = () => {
    window.alert("Reply");
  };

  const clickRetweet = () => {
    window.alert("Retweet");
  };

  const clickLiked = () => {
    window.alert("Liked");
  };

  const clickMore = () => {
    window.alert("More");
  };

  return (
    <div className="tweetContainer">
      <div className="tweet-upper-container">
        <div className="user-image-url">
          <img src={userData.profile_image_url} />
        </div>
        <div className="userInfo">
          <ul>
            <li>
              <span className="user-name">{userData.name}</span>
              <span className="user-screen-name"> @{userData.screen_name}</span>
              <span className="user-post-date">
                {" "}
                {month} {date}
              </span>
            </li>
            <li>{props.text}</li>
          </ul>
        </div>
      </div>
      <div className="tweetMedia">{mediaUrl}</div>
      <div className="tweet-lower-container">
        <div className="tweetMeta">
          <span>
            <i className="fas fa-reply tweetMeta-gap" onClick={clickReply}></i>
          </span>
          <span>
            <i className={retweet} onClick={clickRetweet}>
              <span className="tweetMeta-gap-right">{props.retweetCount}</span>
            </i>
          </span>
          <span>
            <i className={liked} onClick={clickLiked}>
              <span className="tweetMeta-gap-right">{props.favoriteCount}</span>
            </i>
          </span>
          <span>
            <i
              className="fas fa-ellipsis-h tweetMeta-gap"
              onClick={clickMore}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Tweet;
