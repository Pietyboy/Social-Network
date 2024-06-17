import styled from "styled-components";

export const Wrapper = styled.section`
    grid-column: 1/3;
    grid-row: 1/3;
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 60px auto;
`;

export const ResultsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-flow: row;
    gap:20px;
    grid-column: 1/3;
    grid-row: 2/3;

    padding: 20px;
    padding-top: 0;
`;

export const SearchContainer = styled.section`
    padding: 16px;
    grid-column: 2/3;
    grid-row: 1/2;

    display: flex;
    justify-content: space-between;

    &:not(:last-child){
        margin-right: 16px;
    }
`;

export const SearchButton = styled.button`
    height: 100%;
    width: 10%;
`;

export const SearchBar = styled.textarea`
    height: 81%;
    width: 100%;
    resize: none;

    background-color: inherit;
    border: 1px solid #4b515a;
    border-radius: 8px;
    color: white;
    font-size: 20px;
`;