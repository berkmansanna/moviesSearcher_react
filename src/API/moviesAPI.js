import axios from 'axios';

const API_KEY = 'e38ebe2f0be6ffcd2bd323ee6fa50d71';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const getPopularMovies = async () => {
  const data = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return data.data;
};

export const getMoviesById = async id => {
  const data = await axios.get(`movie/${id}?api_key=${API_KEY}`);

  return data.data;
};

export const getMovieReviewsById = async id => {
  const data = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);

  return data.data;
};

export const getMovieCastById = async id => {
  const data = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return data.data;
};

export const getMoviesByQuery = async query => {
  const data = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data.data;
};

export const getGenresList = async () => {
  const data = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return data.data;
};
