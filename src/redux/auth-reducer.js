import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            };
        }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.url,
            };
        }
        default: 
            return state;
    }
}

// Action Creators
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const setCaptchaUrl = (url) => ({
    type: SET_CAPTCHA_URL,
    url,
});


// Thunk Creators
export const getAuthUser = () => (dispatch) => {
    return (
        authAPI.getAuthUser().then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data; 
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    )
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if(data.resultCode === 0) {
        dispatch(getAuthUser());
    }else {
        if(data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = data.messages.length > 0 ? data.messages[0] : "Something gone wrong";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    let captchaUrl = data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    
    if(data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;