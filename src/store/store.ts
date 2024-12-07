import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz";
import soundSlice from "./sound";

export const reducer = {
  quiz: quizSlice,
  sound: soundSlice,
};

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
