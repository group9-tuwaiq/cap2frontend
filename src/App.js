import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Favorite from "./components/Favorite";
import Search from "./components/Search";
import Media from "./components/Media";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/favorite" element={<Favorite />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="/Media/:media" element={<Media />} />
        {/* <Route path="tvshow/" element={<Tvshow />} />
          <Route path="favorite/*" element={<Favorite />} /> */}
      </Routes>
    </div>
  );
}

export default App;
