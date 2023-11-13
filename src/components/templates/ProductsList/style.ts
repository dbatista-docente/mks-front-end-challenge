import styled from 'styled-components';

export const SMain = styled.main`
 display: flex;
 width: 100vw;
 justify-content: center;
 margin-top: 100px;
`;

export const SContainerProducts = styled.div`
 min-height: 77.2vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 colunas
  gap: 22px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); // 3 colunas para telas menores
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); // 2 colunas para telas ainda menores
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; // 1 coluna para telas pequenas
  }
` 
