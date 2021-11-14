import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";
import "./style.css";
import Description from "../Description";

const BASE_URL = "http://localhost:4000";

const Movie = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const movie = await axios.get(`${BASE_URL}/movies`);
    setMovie(movie.data.results);
  };

  return (

    <div className="wrapper">
      <img
        className="movieBackground"
        src="https://img5.goodfon.com/wallpaper/nbig/c/af/sssssss-aaaaaaaaaaa-ddddddddd-fffffffff-rrrrrrr.jpg"
      />

      <Media media={movie} />
      <Search media={movie} />
      <Description media={movie}/>
    </div>
  );
};

export default Movie;
