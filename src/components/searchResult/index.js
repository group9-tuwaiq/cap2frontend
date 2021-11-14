import React from 'react'
// import Search from '../Search'

const SearchResult = ({filteredPersons}) => {
    console.log(filteredPersons)
    console.log("here")
    return (
      
        <ul>
        {filteredPersons.map((item) => (
          <>
            <div className="inner" onClick={()=>{describe(`${item}`)}}>
              <li key={item.trackId}>
                <img src={item.artworkUrl100} />
                {item.trackName}
                <p>Created by :</p>
                {item.artistName}
                {/* <br /> */}
                {/* {item.longDescription} */}
                
              </li>
            </div>
            <button onClick={`()=>{addToFav(${item.trackId})}`}>
              <i class="far fa-heart"></i>
            </button>
          </>
        ))}
      </ul>
    )
}
export default SearchResult;

