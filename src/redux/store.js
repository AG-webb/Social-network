import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navBar-reducer";

let store = {
    _state:  {
        profilePage: {
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
            newPostText: "",
        },
        dialogsPage: {
            messages: [
                {id: "1", message: "Hello, how are you?!"},
                {id: "2", message: "Hey, yooo?!"},
                {id: "3", message: "Hello, how are you 1111?!"},
                {id: "4", message: "Hello, how are you 2222?!"},
                {id: "5", message: "Hello, how are you 3333?!"},
            ],
            newMessageText: "",
            dialogs: [
                {id: "1", name: "Ann"},
                {id: "2", name: "Andrew"},
                {id: "3", name: "Arik"},
                {id: "4", name: "Suzan"},
                {id: "5", name: "Pete"},
            ],
    
        },
        navBar: {
            friends: [
                {id: 1, name: "Alex", src: "https://cdn3.iconfinder.com/data/icons/startup-avatars/259/OfficeAvatarglasses-512.png"},
                {id: 2, name: "Artur", src: "https://cdn4.iconfinder.com/data/icons/cool-avatars-2/190/00-14-512.png"},
                {id: 3, name: "Jack", src: "https://cdn3.iconfinder.com/data/icons/startup-avatars/259/OfficeAvatarYoungMan-512.png"},
            ],
        },
    },
    _callSubscriber() {},
    getState() {    
        return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);

        this._callSubscriber( this._state );
    },
}

export default store;