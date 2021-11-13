import React from "react";
// import BASE_URL from './../../App'
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";
const BASE_URL = "http://localhost:4000";

const Music = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    getAllMusic();
  }, []);

  const getAllMusic = async () => {
    const music = await axios.get(`${BASE_URL}/music`);
    setMusic(music.data);
  };

  function addToFav() {
    <i class="fas fa-heart"></i>;
  }
  return (
    <>
      <Media media={movie} />
      <Search media={movie} />
    </>
  );
};

export default Music;
