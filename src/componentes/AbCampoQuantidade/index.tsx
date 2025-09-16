import React, { useState } from 'react';
// import less from '../../public/assets/img/-.png';
// import more from '../../public/assets/img/+.png';
import styled from 'styled-components';

const CampoQuantidade = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  p {
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #002f52;
    padding: 8px;
    height: 11px;
    border-radius: 100%;
    color: white;
    font-weight: 500;
    font-size: 20px;
  }
`;

export const AbCampoQuantidade = () => {
  const [quantidade, setQuantidade] = useState<number>(1);

  function click() {}

  return (
    <CampoQuantidade>
      <p
        onClick={() =>
          setQuantidade(quantidade > 0 ? quantidade - 1 : quantidade)
        }
      >
        -
      </p>
      {quantidade}
      <p onClick={() => setQuantidade(quantidade + 1)}>+</p>
    </CampoQuantidade>
  );
};
