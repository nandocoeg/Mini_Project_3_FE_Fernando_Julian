import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./API/movieSlice";
import moviesApi from "./API/movieApi";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
