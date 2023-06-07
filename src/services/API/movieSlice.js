import { createSlice } from "@reduxjs/toolkit";
import { useGetPopularMoviesQuery } from "./moviesApi";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(useGetPopularMoviesQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(useGetPopularMoviesQuery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload.results;
      })
      .addCase(useGetPopularMoviesQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
