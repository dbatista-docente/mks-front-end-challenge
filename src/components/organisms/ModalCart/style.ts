import styled from "styled-components";

interface ModalContainerProps {
    isOpen: boolean;
  }

export const SModalContainer = styled.div<ModalContainerProps>`
width: 486px;
min-height: 100vh;
background: #0F52BA;
box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
z-index: 2;
position: absolute;
right: ${props => (props.isOpen ? '0' : '-500px')};
top: 0;
transition: right 0.3s ease;
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

export const SCloseModal = styled.span`
cursor: pointer;
`