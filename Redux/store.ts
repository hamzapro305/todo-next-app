import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '@/Redux/slices/todoSlice'
// import todo from '@/Redux/slices/todoSlice'
export const store = configureStore({
  reducer: {
    todo:todoReducer,
  },
})


// Infer the type of makeStore
// export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch