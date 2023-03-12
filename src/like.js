import React, { useState } from "react";

function Like(props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (props.loggedInUser) {
      if (!liked && !disliked) {
        setLikes(likes + 1);
        setLiked(true);
      } else if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      } else {
        alert("You have already disliked this post.");
      }
    } else {
      alert("Please login or register to like this post");
    }
  };

  const handleDislike = () => {
    if (props.loggedInUser) {
      if (!liked && !disliked) {
        setDislikes(dislikes + 1);
        setDisliked(true);
      } else if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      } else {
        alert("You have already liked this post.");
      }
    } else {
      alert("Please login or register to dislike this post");
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        {liked ? "Unlike" : "Like"}
      </button>
      <span>{likes}</span>
      <button onClick={handleDislike}>
        {disliked ? "Undislike" : "Dislike"}
      </button>
      <span>{dislikes}</span>
    </div>
  );
}

export default Like;
