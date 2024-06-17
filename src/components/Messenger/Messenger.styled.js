import styled from "styled-components";

export const Wrapper = styled.section`
    grid-column: 1/3;
    grid-row: 2/3;

    display: grid;
    justify-items: center;
    
    grid-template-columns: 300px auto;
    grid-template-rows: auto 50px;
    
    height: 100%;

    font-size: 20px;
    font-weight: 500;
`;

export const Content = styled.section``;