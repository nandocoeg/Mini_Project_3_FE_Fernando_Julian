// SearchMoviesSection.js
import React from "react";
import MovieCard from "../../Molecules/MovieCard";

const SearchMovies = ({ searchTerm }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-center">
        Search Movies
      </h1>
      <div className="px-10 py-10 flex gap-10 flex-wrap justify-center">
        <MovieCard searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default SearchMovies;
