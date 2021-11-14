import React from 'react'
import {  useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router';


const BASE_URL = "http://localhost:4000";

const Favorite = () => {
  const [searchField, setSearchField] = useState("");
  const [newResult, setNewResult] = useState("");
  const navigate = useNavigate();
  let [favList, setFavList] = useState([]);
  //favList
  useEffect(() => {
    getFavoriteItem();
  }, []);
  const getFavoriteItem = async () => {
    const favorite = JSON.parse(localStorage.getItem("favList"));
    // console.log(favList);
    setFavList([...favList, favorite])
    console.log(favList);

    
  };

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
  const handleChange = (e) => {
    console.log(searchField, "searchField");
    setSearchField(e.target.value);
  };
  function search() {
    let result = favList.filter((item) => {
      return (
        item.trackName.toLowerCase() == searchField.toLowerCase() ||
        item.artistName.toLowerCase() == searchField.toLowerCase()
      );
    });
    console.log(result[0]);
    setNewResult(result[0]);
  }

  return (
    <>
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        className="input"
        name="value"
        placeholder="Search"
      ></input>
      <button
        onClick={() => {
          search();
        }}
      >
        search
      </button>
      <div className="container">
        <ul>
          {newResult ? (
            <div>
              {newResult.artistName}{" "}
              <button
                onClick={() => {
                  setNewResult("");
                }}
              >
                go back
              </button>{" "}
            </div>
          ) : (
            favList.map((item) => (
              <>
        
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
                        favList.kind == "feature-movie"
                          ? "moviePlayer"
                          : "player"
                      }
                      controls
                    >
                      <source src={item.previewUrl} type="video/mp4" />
                    </video>
                  </li>
                </div>
                
              </>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default Favorite
