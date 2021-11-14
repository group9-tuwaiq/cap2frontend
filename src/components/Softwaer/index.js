import React from "react";
// import BASE_URL from "./../../App";
import axios from "axios";
import Description from "../Description";
import { useEffect, useState } from "react";
import Search from "../Search";
import Media from "../Media";

const BASE_URL = "https://cap2-tuwaiq.herokuapp.com";

const Software = () => {
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    getAllSoftware();
  }, []);

  const getAllSoftware = async () => {
    const software = await axios.get(`${BASE_URL}/software`);

    setSoftware(software.data.results);
  };

  return (
    <>
      <Media media={software} />
      <Search media={software} />
      <Description media={software}/>
    </>
  );
};

export default Software;
