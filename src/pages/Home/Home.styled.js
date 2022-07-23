import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
  background-color: #e2e2e2;
`;

export const Title = styled.h1`
  padding: 20px;
  color: tomato;
`;

export const MovieList = styled.ul`
  border: 3px solid tomato;
`;

export const MovieItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #515151;
`;

export const StyledLink = styled(NavLink)`
  color: tomato;
  &:hover {
    color: black;
  }
`;
