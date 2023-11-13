import styled from 'styled-components';

export const SCardCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 100px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  margin: 30px 50px;
  padding: 10px;

`;

export const SPhotoCart = styled.img`
  height: 60px;
`;

export const SFlexCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const SNameProductCart = styled.h2`
width: 113px;
height: 33px;
flex-shrink: 0;
  color: #2C2C2C;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 17px; /* 130.769% */
`;

export const SQuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SQuantityInput = styled.input`
  width: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 5px;
`;

export const SPriceCart = styled.span`
  color: #2C2C2C;
  font-size: 13px;
  font-weight: 800;
  line-height: 17px; /* 130.769% */
`;