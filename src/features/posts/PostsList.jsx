import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostsAuthors from "./PostsAuthors";
import TimesAgo from "./TimesAgo";
import PostReactions from "./PostReactions";

function PostsList() {
  const postsList = useSelector(selectAllPosts);
  const postsListToRender = postsList.map((post) => {
    return (
      <article className="postBox">
        <h2>{post.title}</h2>
        <h3>{post.content}</h3>
        <PostsAuthors userId={post.userId}></PostsAuthors>
        <TimesAgo timeStamp={post.date}></TimesAgo>
        <PostReactions post={post}></PostReactions>
      </article>
    );
  });
  return (
    <section className="postContainer">
      <h2>Posts</h2>
      {postsListToRender}
    </section>
  );
}

export default PostsList;
