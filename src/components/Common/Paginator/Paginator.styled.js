import styled from "styled-components";

export const Wrapper = styled.nav`
    grid-column: 1/3;
    grid-row: 4/5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PageButton = styled.button`
    background-color: inherit;
    color: white;
    border: none;
    font-size: 20px;
    width: 30px;
    padding: 0;
    margin: 2px;
    opacity: 0.7;

    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`;

export const NavButton = styled.button`
    background-color: inherit;

    color: white;
    border: none;
    font-size: 20px;
    width: 20px;
    padding: 0;
    //margin: 5px;
    margin-left: 5px;
    margin-right: 5px;
    opacity: 0.7;
    justify-self: center;
    display: block;

    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`;