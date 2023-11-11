import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const base_url = "https://image.tmdb.org/t/p/original/";
  //https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=hi//

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setTimeout(() => {
      setSelectedMovie(null);
    }, 5000);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <div className="selected-movie-details">
          <h3>{selectedMovie.title}</h3>
          <h3>{selectedMovie.name}</h3>

          {/* <h3>Release date: {selectedMovie.release_date, selectedMovie.first_air_date}</h3> */}
          <h3>
            Release date:{" "}
            {selectedMovie.release_date == null
              ? selectedMovie.first_air_date
              : selectedMovie.release_date}
          </h3>
          <p>{selectedMovie.overview}</p>
        </div>
      )}
    </div>
  );
}

export default Row;
