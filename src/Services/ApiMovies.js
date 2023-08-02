import axios from "axios";

export const apiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});