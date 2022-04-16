import styled from 'styled-components'

export const Main = styled.div`
    font-family: arial, sans-serif;
    width: 82%;
    margin: 0 auto;
`;

export const TableFilters = styled.div`
display: flex;
justify-content: flex-end;
column-gap: 10px;
`;

export const Table = styled.table`
border-collapse: collapse;
width: 100%;

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }  
`;

export const TableFooter = styled.div`
display: flex;
justify-content: center;
align-items: center;
column-gap: 12px;
width: 100%;
`;

const InheritTesting = styled(TableFooter)`
display: flex;
justify-content: flex-end;
align-items: center;
column-gap: 28px;
width: 100%;
`;

export const styles = {
  InheritTesting
}