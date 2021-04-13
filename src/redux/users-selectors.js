import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.findFriendsPage.users
}

// reselect example
export const getUsersSelector = createSelector( getUsers, (users) => {
    return users.filter(user => true);
});

export const getFetching = (state) => {
    return state.findFriendsPage.isFetching
}

export const getPageSize = (state) => {
    return state.findFriendsPage.pageSize
}

export const getPortionSize = (state) => {
    return state.findFriendsPage.portionSize
}

export const getTotalItemsCount = (state) => {
    return state.findFriendsPage.totalItemsCount
}

export const getCurrentPage = (state) => {
    return state.findFriendsPage.currentPage
}

export const getSubscribeProgress = (state) => {
    return state.findFriendsPage.subscribeProgress
}