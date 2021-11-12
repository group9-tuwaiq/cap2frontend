import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Movie from "./components/Music";
import Nav from "./components/Nav";
const BASE_URL = "http://localhost:4000";

function App() {
  return (
    <div className="App">
     <Movie/>
     <Music/>
     <Nav/>
    </div>
  );
}

export default App;
export default BASE_URL;