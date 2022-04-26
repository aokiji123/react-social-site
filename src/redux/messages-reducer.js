const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE-NEW-MESSAGE-DATA'

const messagesReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                text: state.newMessageData,
            }
            state.messageData.push(newMessage)
            state.newMessageData = ""
            return state
        case UPDATE_NEW_MESSAGE_DATA:
            state.newMessageData = (action.text)
            return state
        default:
            return state
    }
}

export default messagesReducer