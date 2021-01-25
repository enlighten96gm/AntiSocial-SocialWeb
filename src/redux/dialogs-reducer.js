
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: text}]
                };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}
export default dialogsReducer;