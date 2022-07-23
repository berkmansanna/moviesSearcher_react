import { getMoviesByQuery } from 'API/moviesAPI';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  Section,
  SearchMovieList,
  SearchMovieItem,
  StyledLink,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query) handleSearch(query);
  }, []);

  const handleSearch = value => {
    setSearchParams({ query: value });
    getMoviesByQuery(value)
      .then(data => setMovies(data.results))
      .catch(`Error`);
  };

  return (
    <Section>
      <SearchForm onSearch={handleSearch} />

      {movies.length > 0 && (
        <SearchMovieList>
          {movies.map(({ id, title }) => {
            return (
              <SearchMovieItem key={id}>
                <StyledLink to={`${id}`} state={{ from: location }}>
                  {title}
                </StyledLink>
              </SearchMovieItem>
            );
          })}
        </SearchMovieList>
      )}
    </Section>
  );
};
export default Movies;
