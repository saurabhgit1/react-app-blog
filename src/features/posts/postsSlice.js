import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content:
      "Redux tool kit is an important tool to learn for state management",
  },
  {
    id: "2",
    title: "Slicess....",
    content: "The more I say slice, the more funnier it gets",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        //can add payload,meta,error
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            id: userId,
            date: new Date().toISOString()
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => {
  return state.posts;
};

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
