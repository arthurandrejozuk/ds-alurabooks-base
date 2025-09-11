import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const Button = styled.button<AbBotaoProps>`
  font-family: 'Poppins', sans-serif;
  padding: 16px 32px;
  color: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#fff' : '#eb9b00'};
  font-weight: 700;
  font-size: 20px;
  font-style: bold;
  background-color: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#eb9b00 ' : '#fff'};
  border: 2px solid #eb9b00;
  cursor: pointer;
  transition: 100ms;
  ${(props: AbBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background-color: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background-color: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `};
`;

export const AbBotao = ({
  texto,
  tipo = 'primario',
  onClick,
}: AbBotaoProps) => {
  return (
    <Button tipo={tipo} onClick={onClick}>
      {texto}
    </Button>
  );
};
