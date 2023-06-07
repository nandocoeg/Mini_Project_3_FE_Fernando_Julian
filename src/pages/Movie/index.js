import React, { useState } from "react";
import Header from "../../components/Atoms/Header";
import Banner from "../../components/Atoms/Banner";
import Search from "../../components/Molecules/Search";
import Card from "../../components/Atoms/Card";

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Performing search with term:", searchTerm);
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
              value={searchTerm}
              onChange={handleInputChange}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center items-center">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Movie;
