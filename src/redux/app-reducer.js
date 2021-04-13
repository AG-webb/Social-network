import { getAuthUser } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            };
        }
        default: 
            return state;
    }
}

// Action Creators
export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
});


// Thunk Creators
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUser());

    Promise.all([promise])
        .then( () => {
            dispatch(initializedSuccess()) 
        });
}

export default appReducer;