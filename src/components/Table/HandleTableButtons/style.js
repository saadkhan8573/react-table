import styled from 'styled-components';

const backkgroundColor = "white";
const indexBgColor = "red";
const color = "black";
const indexColor = "white";

export const Button = styled.button`
${props => `background: ${props.bgColor};color: ${props.color};`} 
  border-radius : 999px;
   border : 0.5px solid #141414;
   width : 35px;
   height : 35px;
   cursor : pointer;
`;

export const IndexButton = styled.button`
${props => `background: ${indexBgColor}; color: ${indexColor};`} 
  border-radius : 999px;
   border : 0.5px solid #141414;
   width : 35px;
   height : 35px;
`;