import React from "react";
import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://localhost:4000";
const Search = () => {
        // eslint-disable-next-line
  const [result, setResult] = useState([]);
          // eslint-disable-next-line
        // eslint-disable-next-line
  const [media, setMedia] = useState([]);
          // eslint-disable-next-line
  const search = async () => {
    const result = await axios.get(`${BASE_URL}/search`);
    setResult(result.data);
  };
  return <div></div>;
};

export default Search;
