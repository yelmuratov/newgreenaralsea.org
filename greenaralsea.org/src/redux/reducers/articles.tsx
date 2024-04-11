import { createSlice } from '@reduxjs/toolkit'

interface ArticlesState {
  value: number
}

const initialState: ArticlesState = {
  value: 0,
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = articlesSlice.actions

export default articlesSlice.reducer