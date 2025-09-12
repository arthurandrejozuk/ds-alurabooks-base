import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Div = styled.div<{ selecionado: boolean }>`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border: 1px solid ${props => (!props.selecionado ? '#eb9b00' : 'none')};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 24px;
  background: ${props =>
    !props.selecionado ? '#fff' : 'linear-gradient(45deg,#002f52,#326589)'};
  header {
    color: ${props => (!props.selecionado ? '#eb9b00' : '#fff')};
    margin: 0px;
  }
  div {
    margin: 0px;
    p {
      font-weight: 700;
      color: ${props => (!props.selecionado ? '#eb9b00' : '#fff')};
      font-style: bold;
      font-size: 24px;
      margin: 12px;
    }
  }
  footer {
    color: ${props => (!props.selecionado ? '#00000089' : '#fff')};
  }
`;

export interface AbOptionsGroup {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

export interface AbOptionsGroupProps {
  opcoes: AbOptionsGroup[];
  valorPadrao?: AbOptionsGroup | null;
  onChange?: (opcao: AbOptionsGroup | null) => void;
}

export const AbOptionsGroup = ({
  opcoes,
  onChange,
  valorPadrao,
}: AbOptionsGroupProps) => {
  const [selecao, setSelecao] = useState<AbOptionsGroup | null>(
    valorPadrao ?? null
  );
  const aoSelecionar = (opcao: AbOptionsGroup | null): void => {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao);
    }
  };
  return (
    <Section>
      {opcoes.map(opcao => (
        <Div
          onClick={() => aoSelecionar(opcao)}
          key={opcao.id}
          selecionado={selecao?.id == opcao.id}
        >
          <header>{opcao.titulo}</header>
          <div>
            <p>{opcao.corpo}</p>
          </div>
          <footer>{opcao.rodape}</footer>
        </Div>
      ))}
    </Section>
  );
};
