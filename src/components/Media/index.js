import React from "react";
import Description from "../Description";
import "./style.css";

const Media = ({ media }) => {
  return (
    <div className="container">
      <ul>
        {media.map((item) => (
          <>
            <div className="inner">
              <li key={item.trackId}>
                <img src={item.artworkUrl100} />
                {item.trackName}
                <p>Created by :</p>
                {item.artistName}
                {/* <br /> */}
                {/* {item.longDescription} */}
                <video className={media.kind == "feature-movie"? "moviePlayer" : "player"} controls>
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
