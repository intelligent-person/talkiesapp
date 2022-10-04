import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { MovieGenre } from '../../types';

export const genresSlice = createSlice({
  name: 'genres',
  initialState: [] as MovieGenre[],
  reducers: {
    setGenres (state, action: PayloadAction<MovieGenre[]>) {
      return [...action.payload];
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return action.payload.genres;
    }
  }
});

export const { setGenres } = genresSlice.actions;

export default genresSlice.reducer;
