import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";
import { toggleIsFetching } from "./searchReducer";

const SET_USER_DATA = 'mu-APP/auth/SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe()

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, remember) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await authAPI.login(email, password, remember);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { password: message }));
    }

    dispatch(toggleIsFetching(false));
}

export const logout = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    } else {
        console.log('Logout error')
    }
    dispatch(toggleIsFetching(false));
}

export default authReducer;