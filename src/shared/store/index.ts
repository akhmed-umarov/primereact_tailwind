import posts from "@/shared/store/slice/todosBaseFinal";
import { configureStore } from "@reduxjs/toolkit";
import saga from "@/shared/store/slice/todosSaga";

import createSagaMiddleware from "redux-saga";
import postsSaga from "./saga/posts";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { posts, saga },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(postsSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
