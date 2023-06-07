import React, { useEffect } from "react";
import { axiosInstance, apiKey } from "../../../lib";
import { useDispatch } from "react-redux";
import { popularMovie } from "../../../services/movies/movieSlice";

export const PopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axiosInstance
        .get(`/movie/popular?api_key=${apiKey}`)
        .catch((err) => {
          console.log("Err: ", err);
        });

      dispatch(popularMovie(response.data));
    };
    fetchPopularMovies();
  }, []);
};
