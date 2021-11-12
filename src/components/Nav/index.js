import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movie from "../Movie";
const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="music">Music</Link>
        <Link to="movie">Movie</Link>
        <Link to="podcast">Podcast</Link>
        <Link to="tvshow">Tvshow</Link>
        <Link to="favorite">Favorite</Link>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/" element={<Movie />} />
          <Route path="music/" element={<Music />} />
          <Route path="podcast/" element={<Podcast />} />
          <Route path="tvshow/" element={<Tvshow />} />
          <Route path="favorite/*" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
      <input name="value" placeholder="Search"></input>
    </div>
  );
};

export default Nav;
