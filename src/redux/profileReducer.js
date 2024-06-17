import { profileAPI } from "../API/api";
import { toggleIsFetching } from "./searchReducer";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    id: 31249,
    posts: [
        { id: 1, post: 'It\'s my first post', likeCount: 11 },
        { id: 2, post: 'How are you today?', likeCount: 10 }
    ],
    profileInfo: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, post: action.text, likesCount: 0 }],

            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = (text) => ({ type: ADD_POST, text })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await profileAPI.getProfile(userId)
    dispatch(toggleIsFetching(false));
    dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await profileAPI.getStatus(userId)
    dispatch(toggleIsFetching(false));
    dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await profileAPI.updateStatus(status)
    dispatch(toggleIsFetching(false));

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    } else {
        console.log('Updating status error ')
    }
}

export default profileReducer;