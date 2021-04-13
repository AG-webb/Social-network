import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_ITEMS_TOTAL_COUNT = "SET-ITEMS-TOTAL-COUNT";
const TOGGLE_FETCHING = "TOGGLE-FETCHING";
const SUBSCRIBE_IN_PROGRESS = "SUBSCRIBE-IN-PROGRESS";

let initialState = {
    users: [],
    pageSize: 3,
    portionSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    subscribeProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                }),
            }
        }
        case SET_USERS: {
            return {
                ...state,   
                users: action.users,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,   
                currentPage: action.currentPage,
            }
        }
        case SET_ITEMS_TOTAL_COUNT: {
            return {
                ...state,   
                totalItemsCount: action.totalItemsCount,
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,   
                isFetching: action.isFetching,
            }
        }
        case SUBSCRIBE_IN_PROGRESS: {
            return {
                ...state,   
                subscribeProgress: action.inProgress 
                    ? [...state.subscribeProgress, action.userId]
                    : state.subscribeProgress.filter(id => id !== action.userId)
            }
        }
        default: 
            return state;
    }
}

// Action Creators
export const follow = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalItemsCount = (totalItemsCount) => ({
    type: SET_ITEMS_TOTAL_COUNT,
    totalItemsCount,
});

export const toggleFetch = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching,
});

export const toggleSubscribeProgress = (inProgress, userId) => ({
    type: SUBSCRIBE_IN_PROGRESS,
    inProgress,
    userId,
});

// Thunk Creators
export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleFetch(true));
    
    usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
        dispatch(toggleFetch(false));
        dispatch(setUsers(data.items));   
        dispatch(setTotalItemsCount(data.totalCount));   
    });
}

export const deleteSubscribe = (userId) => (dispatch) => {
    dispatch(toggleSubscribeProgress(true, userId));
                        
    usersAPI.deleteSubscribe(userId).then(data => {
        if(data.resultCode === 0) {
            dispatch(unfollow(userId));
        }
        dispatch(toggleSubscribeProgress(false, userId));
    });
}

export const postSubscribe = (userId) => (dispatch) => {
    dispatch(toggleSubscribeProgress(true, userId));

    usersAPI.postSubscribe(userId).then(data => {
        if(data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(toggleSubscribeProgress(false, userId));
    });
}

export default usersReducer;