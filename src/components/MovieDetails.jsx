import { getGenresList, getMoviesById } from "API/moviesAPI"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([{
  init: true,
  title: '',
  poster_path: '',
  vote_average: '',
  overview: '',
  genres: [],
}])
   
    

    useEffect(() => {
        getMoviesById(movieId).then(setMovie).catch(`Error`)
    }, [movieId])


    if (!movie) {
        return
    }

    const { title, poster_path, vote_average, overview } = movie;
    // const moviesGenres = genres.map(g => g.name).join(', ')
    

    return (<>
        <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
        <p>{title}</p>
        <p>User score: {vote_average}</p>
        <p>Overview: {overview}</p>
        {/* <p>Genres: {moviesGenres}</p> */}
    </>)
}