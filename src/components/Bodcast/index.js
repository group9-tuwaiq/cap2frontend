import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";
import "./style.css";

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
    <div className="wrapper">
      <img
        className="podcatBg"
        src="https://static.sonovente.com/img/front/cms/eb3c9a01c223fbf3d59a2fdd3ef13929.jpg"
      />
      <Media media={podcast} />
      <Search media={podcast} />
    </div>
  );
};

export default Podcast;
