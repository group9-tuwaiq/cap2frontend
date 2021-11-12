import React from "react";
import BASE_URL from "./../../App";
import axios from "axios";
import Description from "../Description";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    const movie = await axios.get(`${BASE_URL}/movies`);
    setMovie(movie.data);
  };
  function addToFav(movieId, userId) {
    <i class="fas fa-heart"></i>;
  }

  return (
    <div className="Movie">
      <ul>
        {movie.map((movie) => (
          <>
            <div onClick={<Description media={movie} />}>
              <li key={movie.trackId}>
                {movie.trackViewUrl}
                {movie.trackName}
                <p>Directed by :</p>
                {movie.artistName}
              </li>
            </div>
            <button onClick={`()=>{addToFav(${movie.trackId},${userId})}`}>
              <i class="far fa-heart"></i>
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
