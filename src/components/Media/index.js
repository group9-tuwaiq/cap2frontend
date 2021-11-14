import React from "react";

import axios from "axios";
import Search from "../Search";
import { useNavigate } from "react-router-dom";

import Description from "../Description";
import "./style.css";


const Media = ({ media }) => {
  const navigate = useNavigate();
  function search(e) {
    let textSearch = e.target.value;
    let result = media.filter((item) => {
      return (
        item.trackName.toLowerCase() == textSearch.toLowerCase() ||
        item.artistName.toLowerCase() == textSearch.toLowerCase()
      );
    });
    return <Search result={result} />;
  }

  function describe(item) {
    navigate(`/description/${{ item }}`);
  }
  return (

    // <div className="Movie">
    //   <input name="text" placeholder="Search" onChange={search}></input>

    //   <ul>
    //     {media.map((item) => (
    //       <>
    //         <div
    //           onClick={() => {
    //             describe(`${item}`);
    //           }}
    //         >

    <div className="container">
      <ul>
        {media.map((item) => (
          <>
            <div className="inner">

              <li key={item.trackId}>
                <img src={item.artworkUrl100} />
                {item.trackName}
                <p>Created by :</p>
                {item.artistName}
                {/* <br /> */}
                {/* {item.longDescription} */}
                <video className={media.kind == "feature-movie"? "moviePlayer" : "player"} controls>
                  <source src={item.previewUrl} type="video/mp4" />
                </video>
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
