import { getMoviesByQuery } from 'API/moviesAPI';
import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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
getMoviesByQuery(value).then(data=> setMovies(data.results)).catch(`Error`)
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />

      {movies.length > 0 &&
        movies.map(({ id, title }) => {
          return (
            <ul>
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            </ul>
          );
        })}
    </>
  );
};
export default Movies;
