import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";
import "./style.css";

const BASE_URL = "https://cap2-tuwaiq.herokuapp.com";

const Audiobook = () => {
  const [audiobook, setAudiobook] = useState([]);

  useEffect(() => {
    getAllAudiobook();
  }, []);

  const getAllAudiobook = async () => {
    const audiobook = await axios.get(`${BASE_URL}/audiobook`);

    setAudiobook(audiobook.data.results);
  };
  // function addToFav(movieId, userId) {
  //   <i class="fas fa-heart"></i>;
  // }

  return (
    <div className="audio">
      // eslint-disable-next-line
      <img
        className="audio-background"
        src="https://ebookfriendly.com/wp-content/uploads/2020/09/Audiobook-app-feature-wishlist.jpg" alt="background"
      />
      <Media media={audiobook} />
      <Search media={audiobook} />
    </div>
  );
};
export default Audiobook;
