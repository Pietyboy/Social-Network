import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 60px auto;
    margin: 16px 0;
    margin-right: 20px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    border: 1px solid #4b515a;
    border-radius: 8px;
`;

export const Box = styled.div`

`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    //background-color: rgba(243,220,180,1);
    padding: 16px;
    //border-radius: 8px 8px 0 0;
    //border: 1px solid #4b515a;
    //border-bottom: none;
    grid-column: 1/ 2;
    grid-row: 1/ 2;
`;

export const NovigationButton = styled.button`
    border-radius: 50%;
    background-color: #4b515a;
    border: none;
    width: 30px;
    height: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    };
    &.navLeftButton:not(:last-child){
        margin-right: 10px;
        opacity: 0.7;
        cursor: not-allowed;
    }
    
`;

export const Content = styled.section`
    //background: linear-gradient(180deg, rgba(243,220,180,1) 0%, rgba(203,219,162,1) 20%, rgba(6,216,77,1) 60%);
    //border: 1px solid #4b515a;
    //border-top: none;
    //border-radius: 8px;
    height: fit-content;
    height: 100%;
    grid-column: 1/3;
    grid-row: 1/3;

    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 60px auto;
    
    /* padding: 16px;
    padding-top: 0; */
    color: white;
    h1{
        font-size: 30px;
        margin: 0;
    }
`; 