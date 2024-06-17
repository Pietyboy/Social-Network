import React from "react";
import { Wrapper, MessageWindow, Message, NewMessageText, NewMessageButton, FormWrapper } from "./Messages.styled";
import { Field, reduxForm } from "redux-form";

const Messages = (props) => {

    let messageElements = props.data.map(m => <Message id={m.id} key={m.id}>{m.message}</Message>)

    let onMessageClick = (message) => {
        props.newMessage(message.newMessage);
    }


    return (
        <Wrapper>
            <MessageWindow>{messageElements}</MessageWindow>
            <NewMessageReduxForm onSubmit={onMessageClick}/>
        </Wrapper>
    )
}

const NewMessageForm = (props) => {
    return(
        <FormWrapper onSubmit={props.handleSubmit}>
            <Field name={'newMessage'} component={'input'}/>
            <NewMessageButton>Enter</NewMessageButton>
        </FormWrapper>
    );
}

const NewMessageReduxForm = reduxForm({ form:'newMessage' }) (NewMessageForm);

export default Messages;