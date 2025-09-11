import React from 'react';
import { AbBotao } from '../AbBotao';
import styled from 'styled-components';

const Tags = styled.div`
  padding: 32px;
  max-width: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #080894;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const AbTag = () => {
  return (
    <Tags>
      <ul>
        <li>
          <AbBotao tipo="primario" texto="Android" />
        </li>
        <li>
          <AbBotao tipo="primario" texto="OO" />
        </li>
        <li>
          <AbBotao tipo="primario" texto="Marketing Digital" />
        </li>
        <li>
          <AbBotao tipo="primario" texto="Agile" />
        </li>
        <li>
          <AbBotao tipo="primario" texto="Startups" />
        </li>
        <li>
          <AbBotao tipo="primario" texto="HTML & CSS" />
        </li>
        <li>
          <AbBotao tipo="primario" texto="Java" />
        </li>
        <li>
          <AbBotao tipo="primario" texto="Python" />
        </li>
      </ul>
    </Tags>
  );
};
