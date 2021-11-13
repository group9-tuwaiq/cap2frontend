import React from "react";
import {
  Routes,
  Route,
  NavLink,
  Router,
} from "react-router-dom";
import Favorite from "../Favorite";
import Search from "../Search";
import Media from "../Media";
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

      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/favorite" element={<Favorite />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="/Media/:media" element={<Media />} />
          {/* <Route path="tvshow/" element={<Tvshow />} />
          <Route path="favorite/*" element={<Favorite />} /> */}
      </Routes>
      <input name="value" placeholder="Search"></input>
    </div>
  );
};

export default Nav;
