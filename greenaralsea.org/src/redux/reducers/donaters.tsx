import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/api';



const initialState: Donaters = {
  totalPage: 1,
  isLoading: false,
  isFailed: false,
  donaters: [],
}

interface IArgs {
  page: number,
  sort: string
}

export const fetchDonaters = createAsyncThunk(
    'donaters/fetchDonaters',
    async (arg: IArgs, thunkAPI) => {
        const response = await axios.get(`donation/list/most/${arg.sort}/?page=${arg.page}`);
        // Return only the data part of the response, which should be serializable
        return response.data;
    }
);

export const DonatersSlice = createSlice({
  name: 'DonatersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonaters.pending, (state) => {
        state.isLoading = true;
        state.isFailed = false;
      })
      .addCase(fetchDonaters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFailed = false; 
        state.donaters = action.payload.results;
        state.totalPage = action.payload?.count;
      })
      .addCase(fetchDonaters.rejected, (state) => {
        state.isLoading = false;
        state.isFailed = true;
      });
  }
})

export const {} = DonatersSlice.actions

export default DonatersSlice.reducer