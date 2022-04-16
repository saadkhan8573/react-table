import styled from 'styled-components';



export const Actions = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    column-gap : 12px;

    svg {
        font-size : 22px;
        cursor : pointer;
        color : black;
        /* &:first-child{
            color: white;
        }
        &:last-child{
            color: red;
        } */
        &:nth-child(3){
            color : red
        }
    }
    
`;

export const Input = styled.input`
    width: 170px;
    height : 26px;
    border : 0.5px solid gray;
    border-radius : 3px;
    padding : 0 5px;
`;