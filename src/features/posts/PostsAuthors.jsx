import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

function PostsAuthors({userId}) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <span>{author?.name || "Unknown"}</span>;
}

export default PostsAuthors;
