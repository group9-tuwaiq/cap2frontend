import React from 'react'
import BASE_URL from './../../App'
import axios from "axios";
import {Description} from './components/Description';
import { useEffect,useState } from "react";
const Music = () => {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        getAllMusic();
      }, []);

      const getAllMusic = async () => {
        const music = await axios.get(`${BASE_URL}/music`);
        setMusic(music.data);
      };
      
      function addToFav(){
        <i class="fas fa-heart"></i>
      }
    return (
        <div className="Movie">
      <ul>
        {music.map((music) => (
          <>
            <div onClick={<Description media={music} />}>
              <li key={music.trackId}>
                {music.trackViewUrl}
                {music.trackName}
                <p>{music.artistName}</p>
              </li>
            </div>
            <button onClick={`()=>{addToFav(${music.trackId})}`}>
              <i class="far fa-heart"></i>
            </button>
          </>
        ))}
      </ul>
    </div>
    )
}

export default Music
