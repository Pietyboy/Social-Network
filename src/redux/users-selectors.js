import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
    return state.search.users;
}

export const getUsers = createSelector( getUsersSelector, (users) => {
    return users.filter( u => true);
})

export const getPageSize = (state) => {
    return state.search.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.search.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.search.currentPage;
}

export const getIsFetching = (state) => {
    return state.search.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.search.followingInProgress;
}

export const getPagesItemSize = (state) => {
    return state.search.pagesItemSize;
}