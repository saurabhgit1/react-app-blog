import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);
  const usersOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  const canSave = title && content && userId;

  const onTiteChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserChange = (e) => setUserId(e.target.value);
  const handleAddPost = (e) => {
    // e.preventDefault();
    if (title && content) {
      //   const postObj = {
      //     id: nanoid(),
      //     title,
      //     content,
      //   };
      //   dispatch(addPost(postObj));
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  return (
    <div>
      <h1>Add Posts</h1>
      <form>
        <label htmlFor="">Select User</label>
        <select value={userId} onChange={onUserChange}>
          <option value=""></option>
          {usersOptions}
        </select>
        <input type="text" onChange={onTiteChange} value={title} />
        <input type="text" onChange={onContentChange} value={content} />

        <button
          disabled={!canSave ? true : false}
          onClick={(e) => handleAddPost(e)}
          type="button"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
