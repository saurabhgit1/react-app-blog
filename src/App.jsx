import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./features/counter/Counter";
import "./App.css";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter></Counter> */}
      <PostsList></PostsList>
      <AddPostForm></AddPostForm>
    </>
  );
}

export default App;
