import React from "react";
// import Description from "../Description";

// eslint-disable-next-line
import axios from "axios";
import Search from "../Search";
import { useNavigate } from "react-router-dom";

//import Description from "../Description";

import "./style.css";

const Media = ({ media }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  function search(e) {
    let textSearch = e.target.value;
    let result = media.filter((item) => {
      // eslint-disable-next-line
      return (
        // eslint-disable-next-line
        item.trackName.toLowerCase() == textSearch.toLowerCase() ||
        // eslint-disable-next-line
        item.artistName.toLowerCase() == textSearch.toLowerCase()
      );
    });
    return <Search result={result} />;
  }
// eslint-disable-next-line
  function describe(item) {
    navigate(`/description/${{ item }}`);
  }
  return (
    <div className="container">
      <ul>
      
        {media.map((item) => (
          <>
            <div className="inner">
              <li key={item.trackId}>
                <img src={item.artworkUrl100} alt={item.trackName} />
                {item.trackName}
                <p>Created by :</p>
                {item.artistName}
              
                 <video className={media.kind === "feature-movie"? "moviePlayer" : "player"} controls>

                  <source src={item.previewUrl} type="video/mp4" />
                </video>
              </li>
            </div>
            <button onClick={`()=>{addToFav(${item.trackId})}`}>
              <i class="far fa-heart"></i>
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Media;
