import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;

    row-gap: 16px;
    padding: 16px 20px;

    grid-column: 1/ 2;
    grid-row: 2/ 3;
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    row-gap: 16px;
    padding: 16px 20px;
    
    //background-color: #f3dcb4;
    border: 1px solid #4b515a;
    border-radius: 8px;

    height: fit-content;
`;

export const Button = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 800;
    text-align: start;
    

    border: none;
    background-color: inherit;

    opacity: 0.7;
    padding: 0;

    a{
        color: white;
        text-decoration: none;
    }

    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`;