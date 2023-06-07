import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../Atoms/Card";

const apiKey = "8d30c281f32a0b36bcb32bba655bd73b";
const baseUrl = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/w500";
const Detail = "Detail";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    axios
      .get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then((res) => {
        setSearchResults(res.data.results);
      });
  };

  return (
    <div>
      <Card movies={movies} imageUrl={imageUrl} />
    </div>
  );
};

export default MovieCard;
