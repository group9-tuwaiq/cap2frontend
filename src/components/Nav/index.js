import React from "react";
import { useEffect, useState } from "react";
import Media from "../Media";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  
  return (
    <div className="nav">
      <ul>
        <li className="navItem">
          {" "}
          <Link to="/">Music</Link>
        </li>
        <li className="navItem">
          <Link to="/movie">Movie</Link>
        </li>
        <li className="navItem">
          <Link to="/podcast">Podcast</Link>
        </li>
        <li className="navItem">
          <Link to="/tvShow">Tvshow</Link>
        </li>
        <li className="navItem">
          <Link to="/audiobook">Audiobook</Link>
        </li>
        {/* <li className="navItem">
          <Link to="/favorite">Favorite</Link>
        </li> */}
        <li className="navItem">
          <Link to="/eBook">eBook</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Nav;
