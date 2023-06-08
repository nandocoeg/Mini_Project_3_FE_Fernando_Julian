import React from "react";
import Card from "../../Atoms/Card";
import { useGetUpcomingMoviesQuery } from "../../../services/API/movieApi";

const TopRatedMovies = () => {
  const { data: movies, error, isLoading } = useGetUpcomingMoviesQuery();
  console.log(movies);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const displayedMovies = movies.results.slice(0, 4);

  return (
    <>
      <h1 className="text-4xl font-bold text-white text-center">
        Top 4 Upcoming Movies
      </h1>
      <div className="px-10 py-10 flex gap-10 flex-wrap justify-center">
        {displayedMovies.map((movie) => (
          <Card
            key={movie.id}
            movieTitle={movie.title}
            movieSinopsys={movie.overview}
            moviePoster={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
};

export default TopRatedMovies;
