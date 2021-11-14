import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";
import "./style.css";

const BASE_URL = "https://cap2-tuwaiq.herokuapp.com";

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    getAllPodcast();
  }, []);

  const getAllPodcast = async () => {
    const podcast = await axios.get(`${BASE_URL}/podcast`);

    setPodcast(podcast.data.results);
  };

  return (
          // eslint-disable-next-line

    <div className="wrapper">
      <img
        className="podcatBg"
        src="https://static.sonovente.com/img/front/cms/eb3c9a01c223fbf3d59a2fdd3ef13929.jpg" alt="background"
      />
      <Media media={podcast} />
      <Search media={podcast} />
    </div>
  );
};

export default Podcast;
