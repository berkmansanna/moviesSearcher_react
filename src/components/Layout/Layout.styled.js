import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Conteiner = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const Header = styled.header`
  background-color: #515151;
  border-bottom: 3px solid tomato;
  // box-shadow: 5px 5px 5px 5px tomato;
  padding: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 12px;
  color: black;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;

  &.active {
    color: tomato;
  }
  &:hover {
    color: tomato;
  }
`;
