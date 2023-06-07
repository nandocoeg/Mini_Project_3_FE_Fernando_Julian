import React from "react";
import { useGetPopularMoviesQuery } from "../../../services/API/movieApi";

const MoviesPopular = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();
  console.log(data);
};

export default MoviesPopular;
