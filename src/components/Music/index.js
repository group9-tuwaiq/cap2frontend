import React from "react";
// import BASE_URL from './../../App'
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";
import "./style.css";
const BASE_URL = "https://cap2-tuwaiq.herokuapp.com";

const Music = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    getAllMusic();
  }, []);

  const getAllMusic = async () => {
    const music = await axios.get(`${BASE_URL}/music`);
    setMusic(music.data.results);
  };

  // function addToFav() {
  //   <i class="fas fa-heart"></i>;
  // }
  return (
   
      <div className="wrapper">
        <img
          className="background"
          src="https://veraislam.si/wp-content/uploads/2020/05/si-su%C5%BEenj.jpeg"
        />
        <Media media={music} />
        <Search media={music} />
      </div>
    
  );
};

export default Music;
