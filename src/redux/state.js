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

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state);
    // },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {  // { type: "ADD-POST"}
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export default store;
window.store = store;