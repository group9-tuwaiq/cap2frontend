import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/music">Music</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/podcast">Podcast</Link>
      <Link to="/tvshow">Tvshow</Link>
      <Link to="/software">Software</Link>
      <Link to="/tvshow">Tvshow</Link>
      <Link to="/favorite">Favorite</Link>

      
      <input name="value" placeholder="Search"></input>
    </div>
  );
};

export default Nav;
