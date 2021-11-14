import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Description from "../Description";
import Search from "../Search";
import Media from "../Media";
import "./style.css";

const BASE_URL = "https://cap2-tuwaiq.herokuapp.com";

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
          // eslint-disable-next-line

    <div className="ebook">
      <img
        className="ebook-background"
        src="https://i.pinimg.com/564x/84/47/07/844707763e75f6873dbab5ad05927ed2.jpg" alt="background"
      />
      <Media media={ebook} />
      <Search media={ebook} />
      <Description media={ebook}/>
    </div>
  );
};
export default Ebook;



 