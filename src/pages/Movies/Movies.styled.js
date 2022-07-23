import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 5px 0 40px;
`;

export const SearchMovieList = styled.ul`
  border-top: 1px solid #515151;
  margin-top: 5px;
`;

export const SearchMovieItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #515151;
`;

export const StyledLink = styled(NavLink)`
  color: tomato;
  &:hover {
    color: black;
  }
`;
