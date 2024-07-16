import React from "react";
import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function PostReactions({ post }) {
  const dispatch = useDispatch();

  const handleReactionClick = (reactionName) => {
    dispatch(addReaction({ post, reactionName }));
  };
  const emojisToRender = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button onClick={() => handleReactionClick(name)}>
        {emoji} {post?.["reactions"]?.[name]}
      </button>
    );
  });

  return <div>{emojisToRender}</div>;
}

export default PostReactions;
