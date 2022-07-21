import { getPopularMovies } from 'API/moviesAPI';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [movies, setPopularMovies] = useState([]);

  useEffect(() => {
    if (!movies) {
      return;
    }
    getPopularMovies()
      .then(data => setPopularMovies(data.results))
      .catch(`Error`);
  }, []);

  return (
    <>
      <h2>Trending today </h2>
      <ul>
        {movies.map(({id, title}) => {
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
