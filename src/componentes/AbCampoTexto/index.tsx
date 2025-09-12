import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 4px;
  font-family: 'Poppins', sans-serif;
  font-style: bold;
  font-weight: 700;
  color: #002f52;
  input {
    border: 1px solid #002f52;
    padding: 12px 16px;
    border-radius: 32px;
    font-size: 16px;
  }
  input::placeholder {
    color: #8080809b;
  }
  p {
    margin: 0px;
    margin-left: 16px;
  }
`;

export interface AbCampoTextoProps {
  campo: string;
  placeholder: string;
  tipoCampo: 'text' | 'password';
}

export const AbCampoTexto = ({
  campo = 'E-mail',
  tipoCampo = 'text',
  placeholder = 'seuemail@maneiro.com',
}: AbCampoTextoProps) => {
  return (
    <Label>
      <p>{campo}</p>
      <input type={tipoCampo} placeholder={placeholder} />
    </Label>
  );
};
