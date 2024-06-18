import { profileAPI } from "../API/api";
import { toggleIsFetching } from "./searchReducer";

const ADD_POST = 'mu-APP/profile/ADD-POST';
const DELETE_POST = 'mu-APP/profile/DELETE-POST'
const SET_USER_PROFILE = 'mu-APP/profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'mu-APP/profile/SET-USER-STATUS';
const SET_USER_PHOTO_SUCCESS = 'mu-APP/profile/SET-USER-PHOTO-SUCCESS';

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
        case SET_USER_PHOTO_SUCCESS:
            return {
                ...state,
                profileInfo: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPost = (text) => ({ type: ADD_POST, text })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

const setUserPhotoSuccess = (photos) => ({type: SET_USER_PHOTO_SUCCESS, photos})

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

export const savePhoto = (photos) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await profileAPI.savePhoto(photos);
    dispatch(toggleIsFetching(false));
    if (response.data.resultCode === 0){
        dispatch(setUserPhotoSuccess(response.data.data.photos));
    } else {
        console.log('Image update error')
    }
}

export default profileReducer;