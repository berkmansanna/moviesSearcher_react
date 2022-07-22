import { getMoviesById } from 'API/moviesAPI';
import { Suspense, useEffect, useState, lazy } from 'react';
import {
  useParams,
  useLocation,
  Link,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
import { getGenresList } from 'API/moviesAPI';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMoviesById(movieId).then(setMovie).catch(`Error`);
  }, [movieId]);

  if (!movie) {
    return;
    }

  const { title, poster_path, vote_average, overview } = movie;
 
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <section>
        <Link to={backLinkHref}>Go to back</Link>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <p>{title}</p>
        <p>User score: {vote_average}</p>
        <p>Overview: {overview}</p>
        {/* <p>Genres: {moviesGenres}</p> */}
      </section>
      <section>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </section>

      <Suspense fallback={null}>
        <Routes>
          <Route path="cast" element={<Cast id={movieId} />} />
          <Route path="reviews" element={<Reviews id={movieId} />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default MovieDetails;
