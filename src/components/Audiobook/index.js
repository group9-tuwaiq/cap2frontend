import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";

const BASE_URL = "http://localhost:4000";

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
    <>
      <Media media={audiobook} />
      <Search media={audiobook} />
    </>
  );
};

export default Audiobook;
