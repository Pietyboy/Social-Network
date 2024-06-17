import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;

    height: 100%;

    h2{
        margin: 0;
    }
`;

export const Content = styled.section`
    height: 100%;
`;

export const Button = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 800;
    border: none;
    background-color: inherit;
    opacity: 0.7;
    padding: 0;
    text-align: start;
    color: white;

    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`;

export const ListOptions = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ListItem = styled.li`
    font-size: 10px;
    color: white;
    opacity: 0.7;
    font-weight: 500;

    &:not(:last-child){
        margin-right: 5px;
    }

    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`;