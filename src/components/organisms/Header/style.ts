import styled from "styled-components";

export const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 101px;
  background: #0f52ba;


`;

export const SFlex = styled.div`
  display: flex;
  margin-left: 65px;
  gap: 6px;

  @media screen and (max-width: 768px ){
    margin-left: 10px;
}
`;

export const SH2Mks = styled.h2`
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px; /* 47.5% */
  @media screen and (max-width: 768px ){
    font-size: 32px;
}
`;

export const SH2Sistemas = styled.h2`
margin-top: 6px;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px; /* 95% */
  @media screen and (max-width: 768px ){
    font-size: 16px;
}
`;

