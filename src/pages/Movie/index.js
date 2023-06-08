import React, { useState } from "react";
import Header from "../../components/Atoms/Header";
import Banner from "../../components/Atoms/Banner";
import { SearchForm } from "../../components/Molecules/Search";
import PopularMovies from "../../components/Organism/PopularMovies";
import SearchMovies from "../../components/Organism/SearchMovies";

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="bg-black text-white">
      <Header />
      <div className="flex m-auto">
        <div className="relative">
          <Banner />
          <h1 className="absolute text-4xl font-bold text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-24">
            Search Some Movies
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SearchForm onSubmit={handleSearch} />
          </div>
        </div>
      </div>
      <div className="absolute bg-black">
        <PopularMovies />
        {searchTerm && <SearchMovies searchTerm={searchTerm} />}
      </div>
    </div>
  );
};

export default Movie;
