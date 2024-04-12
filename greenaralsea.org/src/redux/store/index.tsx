import { configureStore } from '@reduxjs/toolkit'
import paysys from '../reducers/paysys'
import DonaterSlice from '../reducers/donaters'
import microServices from '../reducers/microServices'

export const store = configureStore({
  reducer: {
    paysys,
    DonaterSlice,
    microServices
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch