import { combineReducers, configureStore, applyMiddleware} from '@reduxjs/toolkit';
import profileReducer from './profileReducer';
import messangerReducer from './messangerReducer';
import sidebarReducer from './sidebarReducer';
import searchReducer from './searchReducer';
import authReducer from './authReducer';
import {thunk} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    profile: profileReducer,
    messenger: messangerReducer,
    sidebar: sidebarReducer,
    search: searchReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = configureStore({reducer: reducers}, applyMiddleware(thunk));

window.store = store;

export default store;