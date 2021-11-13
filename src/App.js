import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Music from "./components/Music";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
     <Movie/>
     <Music/>
     
    </div>
  );
}

export default App;
