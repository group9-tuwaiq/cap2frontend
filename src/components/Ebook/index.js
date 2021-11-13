import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";

const BASE_URL = "http://localhost:4000";

const Ebook = () => {
  const [ebook, setEbook] = useState([]);

  useEffect(() => {
    getAllEbook();
  }, []);

  const getAllEbook = async () => {
    const ebook = await axios.get(`${BASE_URL}/ebook`);

    setEbook(ebook.data.results);
  };
  // function addToFav(movieId, userId) {
  //   <i class="fas fa-heart"></i>;
  // }

  return (
    <>
      <Media media={ebook} />
      <Search media={ebook} />
    </>
  );
};

export default Ebook;
