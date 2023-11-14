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
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`

export const SCloseModal = styled.span`
cursor: pointer;
`
