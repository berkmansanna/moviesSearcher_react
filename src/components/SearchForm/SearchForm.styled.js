import styled from 'styled-components';

export const Input = styled.input`
  border: 3px solid tomato;
  border-radius: 4px;
  padding: 5px;
  color: #515151;
  background-color: transparent;
  font-size: 15px;
`;

export const Button = styled.button`
  padding: 5px;
  margin-top: 5px;
  color: #515151;
  background-color: transparent;
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
