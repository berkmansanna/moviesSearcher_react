import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  border-top: 3px solid tomato;
  background-color: #e2e2e2;
  padding: 32px 0 40px;
  margin-top: 5px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ReviewsItem = styled.li`
  display: flex;
  margin-top: 10px;
  border-bottom: 3px solid tomato;
`;

export const AuthorName = styled.h2`
  color: #515151;
  padding: 10px;
`;

export const ContentReview = styled.p`
  display: flex;
  color: #515151;
  padding: 10px;
`;
