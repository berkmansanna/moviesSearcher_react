import { getMoviesById } from 'API/moviesAPI';
import { Suspense, useEffect, useState, lazy } from 'react';
import { useParams, useLocation, Routes, Route } from 'react-router-dom';
import {
  BackLink,
  Section,
  CardConteiner,
  CardImg,
  MovieConteiner,
  DiscriptionMovie,
  Title,
  Score,
  Overview,
  DetailsNav,
  DetailsNavList,
  DetailsNavItems,
  Genres,
} from './MovieDetails.styled';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MOVIES_DATA = {
  title: '',
  poster_path: '',
  vote_average: '',
  overview: '',
  genres: [],
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(MOVIES_DATA);
  const location = useLocation();

  useEffect(() => {
    getMoviesById(movieId).then(setMovie).catch(`Error`);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, poster_path, vote_average, overview, genres } = movie;
  const movieGenres = genres.map(item => item.name).join(', ');

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Section>
        <BackLink to={backLinkHref}>Go to back</BackLink>
        <MovieConteiner>
          <CardConteiner>
            <CardImg
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          </CardConteiner>
          <DiscriptionMovie>
            <Title>{title}</Title>
            <Score>User score: {vote_average}</Score>
            <Overview>Overview: {overview}</Overview>
            <Genres>Genres: {movieGenres}</Genres>
            <DetailsNavList>
              <DetailsNavItems>
                <DetailsNav to="cast">Cast</DetailsNav>
              </DetailsNavItems>
              <DetailsNavItems>
                <DetailsNav to="reviews">Reviews</DetailsNav>
              </DetailsNavItems>
            </DetailsNavList>
          </DiscriptionMovie>
        </MovieConteiner>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="cast" element={<Cast id={movieId} />} />
            <Route path="reviews" element={<Reviews id={movieId} />} />
          </Routes>
        </Suspense>
      </Section>
    </>
  );
};
export default MovieDetails;
