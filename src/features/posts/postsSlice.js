import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content:
      "Redux tool kit is an important tool to learn for state management",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slicess....",
    content: "The more I say slice, the more funnier it gets",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
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
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction: (state, action) => {
      const { post, reactionName } = action.payload;
      const index = state.findIndex((statePost) => statePost.id === post.id);
      if (index !== -1) {
        state[index]["reactions"][reactionName]++;
      }
    },
  },
});

export const selectAllPosts = (state) => {
  return state.posts;
};

export const { addPost, addReaction } = postSlice.actions;

export default postSlice.reducer;
