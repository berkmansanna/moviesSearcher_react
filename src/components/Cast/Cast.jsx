import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getMovieCastById } from 'API/moviesAPI';

import {
  CastConteiner,
  CastDiscrConteiner,
  CastImg,
  Section,
  CastName,
  CastCharacter,
} from './Cast.styled';

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
    <Section>
      <CastConteiner>
        {cast.map(({ name, character, profile_path, id }) => {
          return (
            <ul key={id}>
              <CastDiscrConteiner>
                {profile_path && (
                  <CastImg
                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={name}
                  />
                )}
              </CastDiscrConteiner>
              <CastName>{name}</CastName>
              <CastCharacter>Character: {character}</CastCharacter>
            </ul>
          );
        })}
      </CastConteiner>
    </Section>
  );
};
export default Cast;

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};
