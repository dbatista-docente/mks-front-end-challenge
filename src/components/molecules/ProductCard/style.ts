import { styled } from "styled-components";

export const SCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 217.562px;
height: 360px;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
padding: 10px;
`
export const SPhoto = styled.img`
height: 138px;
`
export const SFlex = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 10px;
`
export const SNameProduct = styled.h2`
color: #2C2C2C;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 19px; /* 118.75% */
`

export const SPrice = styled.span`
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background: #373737;
color: #FFF;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 15px; /* 100% */
width: 60px;
height: 30px;
padding: 0 10px;
`
export const SDescription = styled.p`
margin-bottom: 15px;
text-align: left;
color: #2C2C2C;
font-size: 13px;
font-style: normal;
font-weight: 300;
line-height: 20px; /* 120% */
`

export const SButtonBuy = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 237.562px;
height: 31.907px;
border-radius: 0px 0px 8px 8px;
color: #fff;
background: #0F52BA;
position: absolute;
margin-top: 370px;
border: none;
cursor: pointer;
`