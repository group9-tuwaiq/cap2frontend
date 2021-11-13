import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";

const BASE_URL = "http://localhost:4000";

const Bodcast = () => {
  const [bodcast, setBodcast] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const bodcast = await axios.get(`${BASE_URL}/movies`);

    setBodcast(bodcast.data.results);
  };
  // function addToFav(movieId, userId) {
  //   <i class="fas fa-heart"></i>;
  // }

  return (
    <>
      <Media media={bodcast} />
      <Search media={bodcast} />
    </>
  );
};

export default Bodcast;
