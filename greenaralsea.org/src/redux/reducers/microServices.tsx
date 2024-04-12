import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/api';

const initialState:IMicroService = {
  totalTrees: 0,
  YoutubeVideo: [],
  Partners: [],
  greenChampions: [],
  VideosisFailed: false,
  VideosisLoading: false,
  news:[],
  isArticlesLoading: false,
  isArticlesFailed: false,
  selectedArticle: null,
}

export const fetchTotalTrees = createAsyncThunk(
  'microServices/fetchTotalTrees',
    async () => {
    const response = await axios.get(`donation/total/`);
    return response.data.total_donations.amount__sum;
  }
);

export const fetchYoutubeVideos = createAsyncThunk(
  'microServices/fetchVideos',
    async () => {
    const response = await axios.get(`youtube-link/list/`);
    return response.data;
  }
);

export const fetchPartners = createAsyncThunk(
  'microServices/fetchPartners',
    async () => {
    const response = await axios.get(`partner/list/?format=json`);
    return response.data;
  }
);

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await axios.get(`news/list/`);
    return response.data;
  }
);

export const fetchGreenChampions = createAsyncThunk(
  'microServices/fetchGreenChampions',
    async () => {
    const response = await axios.get(`green-champion/list/`);
    return response.data;
  }
);


export const MicroServiceSlice = createSlice({  
  name: 'MicroServiceSlice',
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.selectedArticle = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalTrees.fulfilled, (state, action) => {
        state.totalTrees = action.payload;
      })
      .addCase(fetchYoutubeVideos.pending, (state) => {
        state.VideosisLoading = true;
        state.VideosisFailed = false;
      })
      .addCase(fetchYoutubeVideos.fulfilled, (state, action) => {
        state.YoutubeVideo = action.payload;
        state.VideosisFailed = false;
        state.VideosisLoading = false;
      })
      .addCase(fetchYoutubeVideos.rejected, (state) => {
        state.VideosisLoading = false;
        state.VideosisFailed = true;
      })
      .addCase(fetchPartners.fulfilled, (state, action) => {
        state.Partners = action.payload;
      })
      .addCase(fetchGreenChampions.fulfilled, (state, action) => {
        state.greenChampions = action.payload;
      })
      .addCase(fetchArticles.pending, (state) => {
        state.isArticlesLoading = true;
        state.isArticlesFailed = false;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isArticlesLoading = false;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.isArticlesFailed = true;
        state.isArticlesLoading = false;
      })
  }
})

export const {setArticle} = MicroServiceSlice.actions

export default MicroServiceSlice.reducer