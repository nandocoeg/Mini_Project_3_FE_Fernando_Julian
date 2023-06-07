import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const apiKey = "8d30c281f32a0b36bcb32bba655bd73b";
