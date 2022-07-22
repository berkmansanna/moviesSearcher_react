import { Routes, Route, Link } from 'react-router-dom';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from './MovieDetails';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<div>NOT FOUND ROUTE</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
