import React from 'react';
import styled from 'styled-components';

import { AbBotao } from '../AbBotao';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  width: 500px;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px #00000034;
  padding: 32px 32px 48px 48px;
  p {
    margin: 0px;
  }
  .container__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #eb9b00;
      font-weight: 700;
      font-style: bold;
    }
    ul {
      display: flex;
      list-style-type: none;
      gap: 24px;
      li {
        color: #002f52;
      }
    }
  }
  .container__details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
    h5 {
      font-size: 20px;
      font-weight: 700;
      font-style: bold;
      color: #002f52;
    }
  }
  .container__price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    span {
      p {
        font-weight: 300;
        color: #0000008a;
      }
      h2 {
        font-size: 32px;
        margin: 0px;
        margin-top: 8px;
        color: #002f52;
      }
    }
  }
`;

export const AbCard = () => {
  return (
    <Card>
      <div className="container__title">
        <h1>Sobre o livro:</h1>
        <ul>
          <li>
            <img src="/assets/img/Sacola.png" alt="ícone de sacola" />
          </li>
          <li>
            <img
              src="/assets/img/Favoritos.png"
              alt="ícone de coração(salvar)"
            />
          </li>
        </ul>
      </div>
      <div className="container__details">
        <h5>Liderança em Design</h5>
        <p>Habilidades de gestão para alavancar sua carreira</p>
        <p>Por: Vitor Zanini</p>
      </div>
      <div className="container__price">
        <span>
          <p>A partir de:</p>
          <h2>R$ 29,90</h2>
        </span>
        <AbBotao />
      </div>
    </Card>
  );
};
