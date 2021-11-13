import React from "react";
import Description from "../Description";
const Media = ({ media }) => {
  return (
    <div className="Movie">
      <ul>
        {media.map((item) => (
          <>
            <div>
              <li key={item.trackId}>
              <video width="750" height="500" controls >
      <source src={item.previewUrl} type="video/mp4"/>
     </video>
                
                <img src={item.artworkUrl100} />
                {item.trackName}
                <p>Created by :</p>
                {item.artistName}
                <br/>
                {item.longDescription}

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
