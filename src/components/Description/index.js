import React from "react";
import {  useState,useEffect } from "react";
import axios from "axios";
import {useParams} from "react-dom";

const BASE_URL = "http://localhost:4000";

const Description = ({media}) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getCurrentItem();
  }, []);

  const getCurrentItem = async () => {
    const info = await axios.get(`${BASE_URL}/getCurrentItem`);
    console.log(info.data);
    setItem(info.data);
  };
  return (
    <div>
      {<>
         <div>
              <li key={item.trackId}>
                {item.artworkUrl100}
                {item.trackName}
                <p>Created by :</p>
                {item.artistName}   
                <video
                  // className={
                  //   filteredPersons.kind == "feature-movie" ? "moviePlayer" : "player"
                  // }
                  controls
                >
                  <source src={item.previewUrl} type="video/mp4" />
                </video>
              </li>
            </div> 
             <button onClick={`()=>{addToFav(${item.trackId})}`}>
              add to favorite
            </button>
          </>
        }
    </div>
  );
};

export default Description;