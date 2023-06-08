import React from "react";
import Card from "../../Atoms/Card";
import {
  useGetPopularMoviesQuery,
  useGetSearchMoviesQuery,
} from "../../../services/API/movieApi";

const MovieCard = ({ searchTerm }) => {
  // Use different query hooks based on the presence of searchTerm
  const queryHook = searchTerm
    ? useGetSearchMoviesQuery
    : useGetPopularMoviesQuery;
  const { data: movies, error, isLoading } = queryHook(searchTerm);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {movies.results.map((movie) => (
        <Card
          key={movie.id}
          movieTitle={movie.title}
          movieSinopsys={movie.overview}
          moviePoster={movie.poster_path}
        />
      ))}
    </>
  );
};

export default MovieCard;
