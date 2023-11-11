import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from "./axios";
import requests from "./Requests";
import YouTube from 'react-youtube';

function Banner() {

const [movie, setMovie] = useState([]);
const [trailerId, setTrailerId] = useState('');

useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchTrending);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
    }
    fetchData();
}, []);

console.log(movie);

function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
}

const fetchMovieDetails = async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=23ea168b48d3068b659ca76410370c35&append_to_response=videos`
    );
    const trailer = response.data.videos.results.find(
        (video) => video.type === 'Trailer'
    );
    if (trailer) {
        setTrailerId(trailer.key);
    }
    else {
      alert("No trailer available");
    }
};

const handlePlayClick = () => {
    fetchMovieDetails();
};

const handleStopClick = () => {
  setTrailerId('');
};

return (
    <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
        <div className='banner-contents'>
            <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner-buttons'>
                <button className='banner-button' onClick={handlePlayClick}>Play</button>
                <button className='banner-button'onClick={handlePlayClick}>My List</button>
            </div>
            <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
        </div>

        {trailerId && (
        <div className="trailer-container" >
          <YouTube videoId={trailerId} />
          <button className="close-button" onClick={handleStopClick}>
            Close
          </button>
        </div>
      )}

        <div className='banner-fadeBottom' />
    </header>
);

  }
  export default Banner;
  