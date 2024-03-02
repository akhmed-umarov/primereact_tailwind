import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type IPost } from "./todosBaseFinal";

interface IInitialState {
  load: boolean;
  error: boolean;
  posts: IPost[];
}

const initialState: IInitialState = {
  load: false,
  error: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "saga",
  initialState,
  reducers: {
    getAllPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    loadingStart: (state) => {
      state.load = true;
    },
    loadingEnd: (state) => {
      state.load = false;
    },
    errorAdd: (state) => {
      state.error = true;
    },
    errorRemove: (state) => {
      state.error = false;
    },
  },
});

const { reducer, actions } = postsSlice;

export const {
  getAllPosts,
  addPost,
  removePost,
  loadingStart,
  loadingEnd,
  errorAdd,
  errorRemove,
} = actions;

export default reducer;
