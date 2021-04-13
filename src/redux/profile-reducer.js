import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO = "SAVE-PHOTO";
const PROFILE_EDIT_SUCCESS_TOGGLE = "PROFILE-EDIT-SUCCESS-TOGGLE";
const DELETE = "DELETE";

let initialState = {
    posts: [
        {
            id: "1",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            likes: "150",
            src: "https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
        },
        {
            id: "2",
            message: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            likes: "5404",
            src: "https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
        },
        {
            id: "3",
            message: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            likes: "20",
            src: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg"
        },
    ],
    profile: null,
    profileEditSuccess: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likes: 0,
                src: "https://cdn1.iconfinder.com/data/icons/different-types-of-faces-1/512/8_Avatar_business_woman-512.png",
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case DELETE: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.id),
            };
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        }
        case PROFILE_EDIT_SUCCESS_TOGGLE: {
            return {
                ...state,
                profileEditSuccess: action.success,
            };
        }
        default: 
            return state;
    }
}


// Action Creators
export const deletePost = (id) => ({
    type: DELETE,
    id,
});

export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText,
});

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile,
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});

export const savePhoto = (photos) => ({
    type: SAVE_PHOTO,
    photos,
});

export const profileEditSuccessToggle = (success) => ({
    type: PROFILE_EDIT_SUCCESS_TOGGLE,
    success,
});

// Thunk Creators
export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    });
};

export const uploadPhoto = (photo) => (dispatch) => {
    profileAPI.uploadPhoto(photo)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(savePhoto(data.data.photos));
            }
    });
};

export const saveProfileInfo = (profile) => (dispatch, getState) => {
    let authUserId = getState().auth.userId;
    profileAPI.saveProfileInfo(profile) 
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(getProfile(authUserId));
                dispatch(profileEditSuccessToggle(true));
            }
            else {
                let message = data.messages.length > 0 ? data.messages[0] : "Something gone wrong";
                dispatch(stopSubmit("editProfile", {_error: message}));
                dispatch(profileEditSuccessToggle(false));
            }
    });
};

export default profileReducer;