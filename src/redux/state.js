import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {

            posts: [
                { id: 1, message: "Hello, world!!", likesCount: 19 },
                { id: 2, message: "I love React", likesCount: 3 },
                { id: 2, message: "wow!!", likesCount: 8 },
                { id: 2, message: "I love React", likesCount: 33 },
                { id: 3, message: "abrakadabra", likesCount: 0 },
            ],
            newPostText: "hohoho",

        },

        dialogsPage: {

            dialogs: [
                { id: 1, name: "Sasha" },
                { id: 2, name: "Roma" },
                { id: 3, name: "Artem" },
                { id: 4, name: "Misha" }
            ],
            messages: [
                { id: 1, message: "Hello" },
                { id: 2, message: "Hi" },
                { id: 3, message: "YO" },
                { id: 4, message: "Wow!" },
            ],
            newMessageBody: "",
        },

        sidebar: {

        },

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _callSubscriber() {
        console.log("state changed");
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;