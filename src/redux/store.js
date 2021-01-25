import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'How is your sex life', likesCount: 11},
                {id: 3, message: 'Lol kek', likesCount: 1},
                {id: 4, message: 'Swipe Left', likesCount: 1111},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Gleb'},
                {id: 2, name: 'Pasha'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Igor'},
                {id: 5, name: 'Gena'},
                {id: 6, name: 'Tanya'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your sex life'},
                {id: 3, message: 'Good Life'},
                {id: 4, message: 'Good Life'},
                {id: 5, message: 'Good Life'},
            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Igor'},
            ],
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};




export default store;