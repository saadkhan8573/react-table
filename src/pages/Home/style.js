import styled from 'styled-components';

export const Main = styled.div`
position: relative;
    z-index : 1;
    /* width : 100%; */
    /* height: calc(100vh - 90px); */
    /* height : 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index : 1;

    h1{
        font-size: 60px;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
    } */
`;

export const SecondMain = styled.div`
position: relative;
    z-index : 2;
    background-color: blue;
`;

export const ModelStyle = styled.div`
    position: fixed;
    top: 50px;
    left: 50px;
    width: 600px;
    height: 400px;
    background-color: lightblue;
    z-index : 1050;

`;