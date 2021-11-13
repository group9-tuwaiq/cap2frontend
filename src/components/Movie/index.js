import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import Description from "./components/Description";
import { useEffect, useState } from "react";
import Search from "../Search";
const BASE_URL = "http://localhost:4000";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    const movie = await axios.get(`${BASE_URL}/movies`);
    setMovie(movie.data.results);
  };
  function addToFav(movieId, userId) {
    <i class="fas fa-heart"></i>;
  }

  return (
    <>
    <Media media={movie} />;
    <Search media={movie} />
    </>
  )
};

export default Movie;
