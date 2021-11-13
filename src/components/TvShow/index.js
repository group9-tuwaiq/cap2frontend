import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";

const BASE_URL = "http://localhost:4000";

const TvShow = () => {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const tvShow = await axios.get(`${BASE_URL}/movies`);

    setTvShow(tvShow.data.results);
  };
  // function addToFav(movieId, userId) {
  //   <i class="fas fa-heart"></i>;
  // }

  return (
    <>
      <Media media={tvShow} />
      <Search media={tvShow} />
    </>
  );
};

export default TvShow;
