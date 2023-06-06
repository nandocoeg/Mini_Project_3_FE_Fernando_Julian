import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Search from "../../components/Search";

function Movie() {
  return (
    <div className="container">
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
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
