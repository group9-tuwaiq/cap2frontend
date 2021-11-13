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
                {item.trackViewUrl}
                {item.trackName}
                <p>Created by :</p>
                {item.artistName}
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
