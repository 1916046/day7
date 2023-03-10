import React from "react";
import { useState } from "react";

function Like() {
  
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
  const handleLike = () => {
    setLikes((likes) => likes + 1);
  };

  const handleDislike = () => {
    setDislikes((dislikes) => dislikes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <span>{likes}</span>
      <button onClick={handleDislike}>Dislike</button>
      <span>{dislikes}</span>
    </div>
  );
}

export default Like;