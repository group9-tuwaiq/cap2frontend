import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Favorite from "./components/Favorite";
import Search from "./components/Search";
import Media from "./components/Media";
import Movie from "./components/Movie";
import Music from "./components/Music";
import Bodcast from "./components/Bodcast";
import TvShow from "./components/TvShow";
import Software from "./components/Softwaer";

import Description from "./components/Description";

import Ebook from "./components/Ebook";
import Audiobook from "./components/Audiobook";


function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route exact path="/favorite" element={<Favorite />} />
        {/* <Route exact path="/search" element={<Search />} /> */}
        {/* <Route path="/Media/:media" element={<Media />} /> */}
        <Route path="/movie" element={<Movie />} />
        <Route path="/podcast" element={<Bodcast />} />
        <Route path="/" element={<Music />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/software" element={<Software />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/audiobook" element={<Audiobook />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
