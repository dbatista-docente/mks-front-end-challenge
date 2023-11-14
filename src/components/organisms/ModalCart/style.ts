import styled from "styled-components";

interface ModalContainerProps {
  isOpen: boolean;
}

export const SModalContainer = styled.div<ModalContainerProps>`
visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
width: 486px;
height: 100%;
background: #0F52BA;
box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
z-index: 2;
position: absolute;
right: 0 ;
top: 0;
transition: right 0.3s ease;
overflow-y: auto;

@media screen and (max-width: 768px ){
  width: 80vw;
}
`

export const SHeaderModal = styled.header`
padding: 36px 47px;
display: flex;
justify-content: space-between;
`
export const STitleModal = styled.span`
width: 180px;
height: 56px;
color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const SMainModal = styled.main`
display: flex;
min-height: 150px;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
@media screen and (max-width: 768px ){
  min-height: 170x;
}
`

export const SCloseModal = styled.span`
cursor: pointer;
`
export const SFooterModal = styled.footer`
position: absolute;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 185px;
  padding-top: 30px;
  width:100%;
  @media screen and (max-width: 768px ){
    margin-top: 185px;
    padding-top: 0px;
}
`;

export const STotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  padding: 30px;
  
`;

export const STotal = styled.span`
  color: #FFF;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 53.571% */
`
export const STotalPrice = styled.span`
  color: #FFF;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 53.571% */
`

export const SFinishButton = styled.button`
  width:100%;
  height: 97px;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 28px;
`;