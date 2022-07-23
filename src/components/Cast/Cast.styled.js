import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: #e2e2e2;
  padding: 32px 0 40px;
`;

export const CastConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 25px;
`;

export const CastDiscrConteiner = styled.div`
  height: 550px;
  display: flex;
  align-items: center;
  background-color: tomato;
  border-radius: 10px;
`;

export const CastImg = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const CastName = styled.h2`
  color: #515151;
  padding: 10px;
`;

export const CastCharacter = styled.h3`
  color: #515151;
  padding: 10px;
`;
