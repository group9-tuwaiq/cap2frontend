import React from "react";
import { useEffect, useState } from "react";

const Description = ({ media }) => {
  // const [item,setItem]=useState(media);
  console.log(media);
  return (
    <div>
      {<>
            <div>
              <li key={media.trackId}>
                {media.trackViewUrl}
                {media.trackName}
                <p>Created by :</p>
                {media.artistName}
              </li>
            </div>
            <button onClick={`()=>{addToFav(${media.trackId})}`}>
              <i class="far fa-heart"></i>
            </button>
          </>
        }
    </div>
  );
};

export default Description;
