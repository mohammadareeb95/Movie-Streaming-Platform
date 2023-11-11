import React from "react";
import "./Homescreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Hindi" fetchUrl={requests.fetchHindiMovies} isLargeRow />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Homescreen;
