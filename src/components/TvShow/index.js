import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Description from "../Description";
import Search from "../Search";
import Media from "../Media";
import "./style.css";

const BASE_URL = "https://cap2-tuwaiq.herokuapp.com";

const TvShow = () => {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    getAllTvshow();
  }, []);

  const getAllTvshow = async () => {
    const tvShow = await axios.get(`${BASE_URL}/tvShow`);

    setTvShow(tvShow.data.results);
  };

  return (
    <div className="tvShow">
      <img
        className="tvShow-background"
        src="https://ihearttvclub.com/wp-content/uploads/2020/06/c0def36f4e072e96218adbb2276c2f6a-2048x1536.jpg"alt="background"
      />
      <Media media={tvShow} />
      {/* <Search media={tvShow} /> */}
      <Description media={tvShow}/>
    </div>
  );
};
  
  

export default TvShow;
