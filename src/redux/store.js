import messangerReducer from "./messangerReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profile: {
            posts: [
                { id: 2, post: 'How are you today?', likeCount: 10 },
                { id: 1, post: 'It\'s my first post', likeCount: 11 }
            ],
            newPostText: ""
        },
        messenger: {
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
            ],
            newMessageText:''
        },
        sidebar: {}
    },

    _callSubs() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubs = observer;
    },

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messenger = messangerReducer(this._state.messenger, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubs(this._state);
    }
}

export default store;