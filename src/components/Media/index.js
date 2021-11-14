import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";

const BASE_URL = "http://localhost:4000";

const Media = ({ media }) => {
  const [searchField, setSearchField] = useState("");
  const [newResult, setNewResult] = useState("");
  const navigate = useNavigate();


  function describe(item) {
    axios
      .post(`${BASE_URL}/getItemDetails`, {
        result: item,
      })
      .then(function (res) {
        navigate(`/description/${item.trackId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function addToFav(item) {
    axios
      .post(`${BASE_URL}/fav`, {
        result: item,
      })
      .then(function (res) {
        console.log("added to favorite");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function search() {


    let result = media.filter((item) => {
      // eslint-disable-next-line
      return (

        item.trackName.toLowerCase() == searchField.toLowerCase() ||
        item.artistName.toLowerCase() == searchField.toLowerCase()

    //     // eslint-disable-next-line
    //     item.trackName.toLowerCase() == textSearch.toLowerCase() ||
    //     // eslint-disable-next-line
    //     item.artistName.toLowerCase() == textSearch.toLowerCase()

      );
    });
    console.log(result[0])
    setNewResult(result[0]);
  }


  const handleChange = (e) => {
    console.log(searchField,"searchField")
    setSearchField(e.target.value);
  };

  return (
    <>
      <input
        onChange={(e)=>{handleChange(e)}}
        className="input"
        name="value"
        placeholder="Search"
      ></input>
      <button onClick={()=>{search()}}>search</button>
      <div className="container">
        <ul>
          {newResult ? <div>{newResult.artistName} <button onClick={()=>{setNewResult("")}}>go back</button> </div>:media.map((item) => (
            <>
              <li></li>
              <div
                className="inner"
                onClick={() => {
                  describe(item);
                }}
              >
                <li key={item.trackId}>
                  <img src={item.artworkUrl100} />
                  {item.trackName}
                  <p>Created by :</p>
                  {item.artistName}
                  {/* <br /> */}
                  {/* {item.longDescription} */}
                  <video
                    className={
                      media.kind == "feature-movie" ? "moviePlayer" : "player"
                    }
                    controls
                  >
                    <source src={item.previewUrl} type="video/mp4" />
                  </video>
                </li>
              </div>
              <button onClick={()=>{addToFav(item)}}>
                <i class="far fa-heart"></i>
              </button>
            </>
          ))}
        </ul>
      </div>
    </>
  )
};

export default Media;
