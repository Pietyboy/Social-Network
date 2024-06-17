import React from "react";
import { Wrapper } from "../../Profile/Profile.styled";
import { Field } from "redux-form";

const FormControl = (imput, meta, child, children) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

const TextArea = (props) => {
    return (
        <></>
    );
}

export const createField = (placeholder, name, validators, component, props, text) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} validators={validators} component={component} {...props} />
            {text}
        </div>
    );
}