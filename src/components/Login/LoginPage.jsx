import React from "react";
import { Wrapper, Conteiner, Login, LoginPassword, FormWrapper, Checkbox, SubmitButton } from './LoginPage.styled'
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { createField } from "../Common/FormsControls/FormsControls";

const LoginPage = ({login, isAuth}) => {
    const onSubmit =(formData) => {
        console.log(formData);
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth){
        return(
            <Navigate to={'/profile'}/>
        )
    } else{
        return (
        <Wrapper>
            <LoginReduxForm onSubmit={onSubmit}/>
        </Wrapper>
    );
    }

    
}

const LoginForm = ({handleSubmit}) => {
    return (
        <FormWrapper onSubmit={handleSubmit}>
                {createField('Login', 'email', null, 'input')}
                {createField('Password', 'password', null, 'input', {type: "password"})}
            <Conteiner>
                {createField('Password', 'rememberMe', null, 'input', {type: "checkbox"}, 'remember me')}
            </Conteiner>

            <SubmitButton>Log in</SubmitButton>
        </FormWrapper>
    );
}

const LoginReduxForm = reduxForm({ form:'login'}) (LoginForm) 

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (LoginPage);