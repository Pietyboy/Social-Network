export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length must be under ${maxLength} symbols`;
    return undefined;
}