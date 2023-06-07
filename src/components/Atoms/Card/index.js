import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = "8d30c281f32a0b36bcb32bba655bd73b";
const baseUrl = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/w500";

function Card() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&`).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  console.log(movies);

  return (
    <div className="grid grid-cols-4 justify-center gap-8">
      {movies.map((movie) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 w-64 h-96 relative">
          <img
            src={`${imageUrl}${movie.poster_path}`}
            alt="Placeholder"
            className="w-64 h-96"
          />
          <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{movie.title}</div>
              <p className="text-gray-300 text-base text-ellipsis">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
