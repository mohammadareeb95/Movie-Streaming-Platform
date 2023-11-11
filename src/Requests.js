
const API_KEY = "23ea168b48d3068b659ca76410370c35";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHindiMovies: `/discover/movie?api_key=${API_KEY}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=hi`
};

export default requests;