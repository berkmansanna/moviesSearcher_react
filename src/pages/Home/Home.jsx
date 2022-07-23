import { getPopularMovies } from 'API/moviesAPI';
import { useState, useEffect } from 'react';
import { Main, Title, MovieList, MovieItem, StyledLink } from './Home.styled';

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
    <Main>
      <Title>Trending today </Title>
      <MovieList>
        {movies.map(({ id, title }) => {
          return (
            <MovieItem key={id}>
              <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
            </MovieItem>
          );
        })}
      </MovieList>
    </Main>
  );
};

export default Home;
