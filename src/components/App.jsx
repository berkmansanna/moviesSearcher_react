import { Route, Routes } from "react-router-dom"
import { lazy} from 'react';

import  Layout  from "./Layout/Layout"

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        <Route path="*" element={<div>NOT FOUND ROUTE</div>} />
      </Route>
   </Routes>
  )
}



