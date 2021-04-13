import navBarReducer from "./navBar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMidlleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";
import carsReducer from "./cars-reducer";


const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    navBar: navBarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findFriendsPage: usersReducer,
    carsPage: carsReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

// for redux devTool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMidlleware)
));

// let store = createStore(reducers, applyMiddleware(thunkMidlleware));

window.store = store;

export default store;