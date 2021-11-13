import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";

const BASE_URL = "http://localhost:4000";

const Software = () => {
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const software = await axios.get(`${BASE_URL}/movies`);

    setSoftware(software.data.results);
  };
  // function addToFav(movieId, userId) {
  //   <i class="fas fa-heart"></i>;
  // }

  return (
    <>
      <Media media={software} />
      <Search media={software} />
    </>
  );
};

export default Software;
