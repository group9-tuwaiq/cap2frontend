import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";

const BASE_URL = "http://localhost:4000";

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    getAllPodcast();
  }, []);

  const getAllPodcast = async () => {
    const podcast = await axios.get(`${BASE_URL}/podcast`);

    setPodcast(podcast.data.results);
  };
  // function addToFav(movieId, userId) {
  //   <i class="fas fa-heart"></i>;
  // }

  return (
    <>
      <Media media={podcast} />
      <Search media={podcast} />
    </>
  );
};

export default Podcast;
