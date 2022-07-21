import axios from 'axios';

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzhlYmUyZjBiZTZmZmNkMmJkMzIzZWU2ZmE1MGQ3MSIsInN1YiI6IjYyOTdhYTE4YTQ0ZDA5NTI3NWU1NGRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6YYJBf3F30kk9iGMeJ0fQORaZAEybIJy5rDEULryiVY

// https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e38ebe2f0be6ffcd2bd323ee6fa50d71';

export const getPopularMovies = async () => {
  const data = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return data.data;
};

export const getMoviesById = async id => {
  const data = await axios.get(`movie/${id}?api_key=${API_KEY}`);

  return data.data;
};

