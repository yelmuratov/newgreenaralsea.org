import { configureStore } from '@reduxjs/toolkit'
import paysys from '../reducers/paysys'
import articles from '../reducers/articles'

export const store = configureStore({
  reducer: {
    paysys,
    articles,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch