import React from "react";
import Card from "../../Atoms/Card";
import { useGetPopularMoviesQuery } from "../../../services/API/movieApi";

const MovieCard = () => {
  const { data: movies, error, isLoading } = useGetPopularMoviesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  // Guard against movies or movies.results being undefined
  if (!movies || !movies.results) {
    // Or return a specific message like <p>No movies found.</p>
    // For now, returning null will make tests for empty/undefined data pass similarly.
    return null;
  }

  const displayedMovies = movies.results.slice(0, 8);

  return displayedMovies.map((movie) => (
    // Added key prop and removed unnecessary fragment
    <Card
      key={movie.id}
      movieTitle={movie.title}
      movieSinopsys={movie.overview}
      moviePoster={movie.poster_path}
      movieTrailer={movie.trailer} // Assuming Card component uses this
      moviePopularity={movie.popularity}
    />
  ));
};

export default MovieCard;
