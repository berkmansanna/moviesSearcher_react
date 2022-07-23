import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: #e2e2e2;
  padding: 32px 0 40px;
`;

export const BackLink = styled(NavLink)`
  padding: 10px;
  color: #515151;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  border: 3px solid tomato;
  border-radius: 4px;

  &.active {
    color: tomato;
    border-color: #515151;
  }
  &:hover {
    color: tomato;
  }
`;

export const CardConteiner = styled.div`
  height: 550px;
  display: flex;
  align-items: center;
  background-color: tomato;
  border-radius: 10px;
`;

export const CardImg = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const MovieConteiner = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const DiscriptionMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`;

export const Title = styled.h2`
  color: #515151;
  padding: 10px;
`;

export const Score = styled.h3`
  color: #515151;
  padding: 10px;
`;

export const Overview = styled.h3`
  display: flex;
  color: #515151;
  padding: 10px;
`;

export const Genres = styled.p`
  display: flex;
  color: #515151;
  padding: 10px;
`;

export const DetailsNav = styled(NavLink)`
  padding: 12px;
  color: #515151;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  border: 3px solid tomato;
  border-radius: 4px;

  &.active {
    color: tomato;
    border-color: #515151;
  }
  &:hover {
    color: tomato;
  }
`;

export const DetailsNavList = styled.ul`
  display: flex;
`;

export const DetailsNavItems = styled.li`
  display: flex;
`;
