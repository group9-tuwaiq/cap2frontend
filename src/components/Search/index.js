import React from "react";
import SearchResult from "../SearchResult";
import Media from "../Media";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:4000";

const Search = () => {
  const [result, setResult] = useState([]);
  const [media, setMedia] = useState([]);
  // const search = async () => {
  //   const result = await axios.get(`${BASE_URL}/search`);
  //   setResult(result.data);
  // };
  return <div></div>;
};

export default Search;
