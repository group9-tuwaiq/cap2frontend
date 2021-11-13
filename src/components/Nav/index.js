import React from "react";
import { BrowserRouter, Routes, Route, NavLink,Router } from "react-router-dom";
import Movie from "./components/Movie";
import Music from "./components/Music";
import ReactDOM from 'react-dom';

const Nav = () => {
  return (
    <div>
      <Router>
        <NavLink to="music">Music</NavLink>
        <NavLink to="movie">Movie</NavLink>
        <NavLink to="podcast">Podcast</NavLink>
        <NavLink to="tvshow">Tvshow</NavLink>
        <NavLink to="favorite">Favorite</NavLink>
      </Router>

      {/* <BrowserRouter> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route exact path="/movie" element={<Movie />} />
          <Route exact path="/music" element={<Music />} />
          {/* <Route path="podcast/" element={<Podcast />} />
          <Route path="tvshow/" element={<Tvshow />} />
          <Route path="favorite/*" element={<Favorite />} /> */}
        </Routes>
      {/* </BrowserRouter> */}
      <input name="value" placeholder="Search"></input>
    </div>
  );
};

export default Nav;
