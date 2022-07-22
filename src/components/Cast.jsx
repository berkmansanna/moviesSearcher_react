import { getMovieCastById } from 'API/moviesAPI';
import { useEffect, useState } from 'react';

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCastById(id)
      .then(data => setCast(data.cast))
      .catch(`Error`);
  }, [id]);

  if (!cast) {
    return;
  }

  return (
    <>
      {cast.map(({ name, character, profile_path, id }) => {
        return (
          <ul key={id}>
            <li >
              <div>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={name}
                  />
                )}
              </div>
              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default Cast;
