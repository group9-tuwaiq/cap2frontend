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
  const [favList, setFavList] = useState([]);
  function addToFav(item) {
    console.log(item, "string local storage");
    setFavList([...favList, {item}]);
    localStorage.setItem("favList", JSON.stringify(favList));
  }
  function search() {
    let result = media.filter((item) => {
      return (
        item.trackName.toLowerCase() == searchField.toLowerCase() ||
        item.artistName.toLowerCase() == searchField.toLowerCase()
      );
    });
    console.log(result[0]);
    setNewResult(result[0]);
  }

  const handleChange = (e) => {
    console.log(searchField, "searchField");
    setSearchField(e.target.value);
  };

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
            media.map((item) => (
              <>
                <div className="cards">
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
                          media.kind == "feature-movie"
                            ? "moviePlayer"
                            : "player"
                        }
                        controls
                      >
                        <source src={item.previewUrl} type="video/mp4" />
                      </video>
                    </li>
                  </div>
                  <div className="favBtn">
                    <button
                      onClick={() => {
                        addToFav({ item });
                      }}
                    >
                      favorite
                    </button>
                  </div>
                </div>
              </>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default Media;
