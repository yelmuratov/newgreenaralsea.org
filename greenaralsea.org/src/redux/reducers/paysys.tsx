import { createSlice } from '@reduxjs/toolkit'

interface PaysysState {
  value: number
}

const  initialState: PaysysState = {
  value: 0,
}

export const paysysSlice = createSlice({
  name: 'paysys',
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


export const { increment, decrement, incrementByAmount } = paysysSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default paysysSlice.reducer