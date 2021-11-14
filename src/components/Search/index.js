import React from "react";

const BASE_URL = "http://localhost:4000";
const Search = () => {
  //console.log(result);
  return (
    <div className="Movie">
      {/* <ul>
        {result.map((item) => (
          <>
            <div>
              <li key={item.trackId}>
                {item.trackViewUrl}
                {item.trackName}
                <p>Created by :</p>
                {item.artistName}
              </li>
            </div>
            <button onClick={`()=>{addToFav(${item.trackId})}`}>
              <i class="far fa-heart"></i>
            </button>
          </>
        ))}
      </ul> */}
    </div>
  );
};

export default Search;
