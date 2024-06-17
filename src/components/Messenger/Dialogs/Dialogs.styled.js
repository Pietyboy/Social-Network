import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/3;
    align-items: stretch;
    //padding: 10px;
    border-top: 1px solid #4b515a;
    border-right: 2px solid #4b515a;
    //background-color: #EDDCB1;
    text-align: center;
    display: grid;
    overflow: hidden;
    padding: 5px 0;
`;

export const Dialog = styled.section`
    border: 1px solid #4b515a;
    //padding: 5px;
    margin-bottom: 5px;
    opacity: 0.7;
    min-width: 200px;

    &:hover{
        opacity: 1;
        cursor: pointer;
    }

    &.active{
        opacity: 1;
    }
`;