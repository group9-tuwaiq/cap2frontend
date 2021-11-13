import React from "react";
import Description from "../Description"
const Media = (media) => {
  return (
    <div className="Movie">
      <ul>
        {media.map((item) => (
          <>
            <div onClick={<Description media={media} />}>
              <li key={item.trackId}>
                {item.trackViewUrl}
                {item.trackName}
                <p>Directed by :</p>
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
