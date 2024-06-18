import styled from "styled-components";

export const Wrapper = styled.section`
    grid-column: 1/3;
    grid-row: 2/3;
`;

export const Content = styled.section`
    padding: 16px;
    padding-top: 0;

    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 200px auto;
`;

export const PersonalImg = styled.article`
    grid-column: 1;
    grid-row: 1;
    border: 1px solid #4b515a;
    border-radius: 6px;
    //max-width: 200px;
    //align-self: center;
    display: block;
    img{
        width: 100%;
        height: 100%;
    }
    overflow: hidden;
    
`;

export const PersonalInfo = styled.article`
    grid-column: 2;
    grid-row: 1;
    border: 1px solid #4b515a;
    border-radius: 6px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
`;

export const NewPostContainer = styled.form`
    display: flex;
    height: 25px;
    width: auto;
`;

export const NewPostText = styled.textarea`
    background-color: black;
    border-radius: 6px;
    border-color: #4b515a;
    color: white;
    resize: none;
    width: 100%;
    height: 19px;
`;

export const AddButton = styled.button`
    background-color: black;
    border:1px solid #4b515a;
    border-radius: 6px;
    opacity: 0.7;
    color: white;
    width: 120px;
    height: 25px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;

    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`;

export const PersonalPosts = styled.section`
    margin-top: 16px;
    grid-column: 1/3;
    grid-row: 2/3;
    border: 1px solid #4b515a;
    border-radius: 6px;
`;

export const Post = styled.article`
    &:not(:last-child){
    border-bottom: 1px solid #4b515a;
    }
`;

export const ChangePersonalImgButton = styled.input``;