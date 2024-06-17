import styled from "styled-components";

export const Wrapper = styled.div`
    //background-color: #4C522D;
    //height: 100px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    height: 100px;

    //padding: 16px 0;
    border-bottom: 1px solid #4b515a;
    position: sticky;
    padding-right: 5%;
    //top: 0;
    //z-index: 100;
    /* background: #0e1218; */
    color: white
`;

export const Content = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 50%;
    vertical-align: top;
    padding-left: 5%;
`;

export const Button = styled.div`
    border: 1px solid #4b515a;
    //background-color: #06d84d;
    border-radius: 25px; 
    width: 100px;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: white;
    opacity: 0.7;
    

    &:not(:last-child){
        margin-right: 30px;
    }

    &:hover{
        border-color: white;
        opacity: 1;
        color: white;
        //background-color: #f642f5;
        cursor: pointer;
    }
`;

