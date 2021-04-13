const ADD_DIALOG = "ADD-DIALOG";

let initialState = {
    messages: [
        {id: "1", message: "Hello, how are you?!"},
        {id: "2", message: "Hey, yooo?!"},
        {id: "3", message: "Hello, how are you 1111?!"},
        {id: "4", message: "Hello, how are you 2222?!"},
        {id: "5", message: "Hello, how are you 3333?!"},
    ],
    dialogs: [
        {id: "1", name: "Ann"},
        {id: "2", name: "Andrew"},
        {id: "3", name: "Arik"},
        {id: "4", name: "Suzan"},
        {id: "5", name: "Pete"},
    ],

};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DIALOG: {
            let newDialog = {
                id: state.messages.length + 1,
                name: "Armen",
            }
        
            let newMessage = {
                id: state.dialogs.length + 1,
                message: action.newDialogText,
            };

            return {
                ...state,
                dialogs: [...state.dialogs, newDialog],
                messages: [...state.messages, newMessage],
            };
        }
        default: 
            return state;
    }
}

// Action Creators
export const addDialog = (newDialogText) => ({
    type: ADD_DIALOG,
    newDialogText,
});

// Thunk Creators

export default dialogsReducer;