import React from "react";
import Card from "../../Atoms/Card";
import { useGetPopularMoviesQuery } from "../../../services/API/movieApi";

const MovieCard = () => {
  const { data: movies, error, isLoading } = useGetPopularMoviesQuery();
  console.log(movies);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const displayedMovies = movies.results.slice(0, 8);

  return displayedMovies.map((movie) => {
    return (
      <>
        <Card
          movieTitle={movie.title}
          movieSinopsys={movie.overview}
          moviePoster={movie.poster_path}
          movieTrailer={movie.trailer}
          moviePopularity={movie.popularity}
        />
      </>
    );
  });
};

export default MovieCard;
