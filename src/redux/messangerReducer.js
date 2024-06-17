const newMessage = 'NEW-MESSAGE';

let initialState = {
    dialogs: [
        { id: 545, name: 'Oleg' },
        { id: 123, name: 'Anton' },
        { id: 545, name: 'Ravin' },
        { id: 321, name: 'Risen' },
        { id: 28, name: 'Forz' },
        { id: 17, name: 'Rec' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Not Toty yet' },
        { id: 3, message: 'Woi' },
        { id: 4, message: 'Lol' },
        { id: 5, message: 'Kek' },
    ]
};

const messangerReducer = (state = initialState, action) => {

    switch (action.type) {
        case newMessage:
            return {
                ...state, 
                messages: [ ...state.messages, {id: 5, message: action.text}], 
                newMessageText: ''
            };
        default:
            return state;
    }
}

export const newMessageActionCreator = (text) => ({ type: newMessage , text})

export default messangerReducer;