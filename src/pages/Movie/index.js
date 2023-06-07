import React, { useState } from "react";
import Header from "../../components/Atoms/Header";
import Banner from "../../components/Atoms/Banner";
import Search from "../../components/Molecules/Search";
import MovieCard from "../../components/Molecules/MovieCard";

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("handle search => ", searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("searchTerm:", searchTerm);
  };

  return (
    <div className="container bg-black text-white">
      <Header />
      <div className="flex m-auto">
        <div className="relative">
          <Banner />
        </div>
        <div>
          <h1 className="absolute text-4xl font-bold text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-24">
            Search Some Movies
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Search
              onSearch={handleSearch}
              onChange={handleInputChange}
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center items-center">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Movie;
