import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    //padding: 10px;
    //background-color: #B4A787;
    //background: linear-gradient(180deg, rgba(243,220,180,1) 0%, #d2c09d 20%, #B4A787 60%);
    //border-radius: 0 0 10px 0;
    grid-column: 2/4;
    grid-row: 1/3;
   

    border-top: 1px solid #4b515a;
    //border-radius: 0 6px 6px 0 ;
    //border: none;
    display: grid;
    grid-template-rows: auto 50px;
    grid-template-columns: auto 100px;
`;

export const FormWrapper=styled.form`
    display: flex;
    flex-direction: row;
    //width: 50%;
    align-items: center;
`;

export const MessageWindow = styled.section`
    grid-column: 1/3;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    row-gap: 10px;
    column-gap: 10px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: black;
`;

export const Message = styled.div`
    border: 3px solid #4b515a;
    border-radius: 6px;
    text-align: center;
    width: fit-content;
    height: fit-content;
    padding: 5px;
`;

export const NewMessageText = styled.textarea`
    grid-column: 1/2;
    grid-row: 2/3;
    background-color: inherit;
    border: 1px solid #4b515a;
    //border-radius: 6px 0 0 6px;
    border-right: none;
    resize: none;
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    color: white;
    //margin-right: 10px;

    //margin-top: 10px;
    max-width: auto;
    max-height: auto;
`;

export const NewMessageButton = styled.button`
    grid-column: 2/3;
    grid-row: 2/3;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border: 1px solid #4b515a;
    border-radius: 0 0 6px 0;
    color: white;
    opacity: 0.7;

    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`;