import { getPopularMovies } from 'API/moviesAPI';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(data => setPopularMovies(data.results))
      .catch(`Error`);
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <h2>Trending today </h2>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home