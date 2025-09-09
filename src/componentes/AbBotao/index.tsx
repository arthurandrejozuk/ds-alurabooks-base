import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 16px 32px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  font-style: bold;
  background-color: #eb9b00;
  border: 2px solid #eb9b00;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    background-color: #b87900;
    border: 2px solid #b87900;
  }
`;

export const AbBotao = () => {
  return <Button>Clique aqui!</Button>;
};
