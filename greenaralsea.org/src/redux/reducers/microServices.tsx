import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/api';

interface Donaters {
  totalTrees: number,
  YoutubeVideo: IVideos[],
  
}

const initialState = {

}

export const DonatersSlice = createSlice({
  name: 'DonatersSlice',
  initialState,
  reducers: {},
})

export const {} = DonatersSlice.actions

export default DonatersSlice.reducer