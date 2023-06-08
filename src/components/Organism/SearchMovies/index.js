import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import React from "react";
import MovieCard from "../../Molecules/MovieCard";
import { useGetSearchMoviesQuery } from "../../../services/API/movieApi";
import Card from "../../Atoms/Card";

const SearchMovies = ({ searchTerm }) => {
  const {
    data: movies,
    error,
    isLoading,
  } = useGetSearchMoviesQuery(searchTerm);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const displayedMovies = movies.results.slice(0, 8);

  return (
    <>
      <h1 className="text-4xl font-bold text-white text-center">
        Search Results
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

export default SearchMovies;
