import React, { useState } from "react";
import Header from "../../components/Atoms/Header";
import Banner from "../../components/Atoms/Banner";
import { SearchForm } from "../../components/Molecules/Search";
import PopularMovies from "../../components/Organism/PopularMovies";
import SearchMovies from "../../components/Organism/SearchMovies";
import { DetailButton } from "../../components/Atoms/Button";
import Footer from "../../components/Atoms/Footer";
import GenreButton from "../../components/Molecules/Genre";
import TopRatedMovies from "../../components/Organism/UpcomingMovies";

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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold p-4">Search Some Movies</h1>
            <div className="p-4">
              <SearchForm onSubmit={handleSearch} />
            </div>
            <GenreButton />
          </div>
        </div>
      </div>
      <div className="absolute bg-black">
        {searchTerm && <SearchMovies searchTerm={searchTerm} />}
        <PopularMovies />
        <TopRatedMovies />
        <Footer />
      </div>
    </div>
  );
};

export default Movie;
