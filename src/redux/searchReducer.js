import { userAPI } from "../API/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'mu-APP/search/FOLLOW';
const UNFOLLOW = 'mu-APP/search/UNFOLLOW';
const SET_USERS = 'mu-APP/search/SET-USERS';
const SET_CURRENT_PAGE = 'mu-APP/search/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'mu-APP/search/SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'mu-APP/search/TOGGLR-IS-FETCHING';
const GET_USER_ID = 'mu-APP/search/GET-USER-ID';
const TOGGLE_IS_FOLLOWING = 'mu-APP/search/TOGGLE-IS-FOLLOWING';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 1,
    pagesItemSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    userId: null
};

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.toggle
            }

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        case GET_USER_ID:
            return {
                ...state,
                userId: action.id
            }

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })

export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })

export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count })

export const toggleIsFetching = (toggle) => ({ type: TOGGLE_IS_FETCHING, toggle })

export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, userId, isFetching })

export const getUserId = (id) => ({ type: GET_USER_ID, id })

export const requestUsers = (page, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let response = await userAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setTotalCount(response.data.totalCount));
    dispatch(setUsers(response.data.items));
    
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowing(true, userId));

    let response = await apiMethod;

    if (response.resultCode === 0) {
        dispatch(actionCreator)
    }
    
    dispatch(toggleIsFollowing(false, userId));
}

export const follow = (userId) =>
    async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.followUser(userId), followSuccess(userId));
    }

export const unfollow = (userId) =>
    async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollowUser(userId), unfollowSuccess(userId));
    }

export default searchReducer;