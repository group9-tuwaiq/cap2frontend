import React from 'react'
import {  useState,useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

const Favorite = () => {
    const [item, setItem] = useState([]);

  useEffect(() => {
    getFavoriteItem();
  }, []);
    const getFavoriteItem = async () => {
        const info = await axios.get(`${BASE_URL}/getFavoriteItem`);
        console.log(info.data);
        setItem(info.data);
      };
    return (
        <div>
            Favotire
        </div>
    )
}

export default Favorite
