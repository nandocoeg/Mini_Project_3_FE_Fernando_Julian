import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, baseUrl } from "./api";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `movie/popular?api_key=${apiKey}`,
    }),
    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?api_key=${apiKey}`,
    }),
    getUpcomingMovies: builder.query({
      query: () => `movie/upcoming?api_key=${apiKey}`,
    }),
    getMovieDetails: builder.query({
      query: (id) => `movie/${id}?api_key=${apiKey}`,
    }),
    getSearchMovies: builder.query({
      query: (searchTerm) =>
        `search/movie?query=${searchTerm}&api_key=${apiKey}`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieDetailsQuery,
  useGetSearchMoviesQuery,
} = moviesApi;
