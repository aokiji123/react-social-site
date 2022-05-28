const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE-NEW-MESSAGE-DATA'

let initialState = {
        peopleData: [
            {name: "Den", url: "den"},
            {name: "Mike", url: "mike"},
            {name: "Rebbeka", url: "rebbeka"},
            {name: "Jesse", url: "jesse"},
            {name: "Clam", url: "clam"},
            {name: "Kate", url: "kate"},
            {name: "Vanessa", url: "vanessa"}
        ],
    
        messageData: [
            {text: "hi mate how are you?"},
            {text: "hello"},
            {text: "well i'm kinda boring, try to take some rest watching youtube"},
            {text: "today was studying a lot"},
        ],

        newMessageData: ""
}

const messagesReducer = (state = initialState, action) => {
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

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageDataActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_DATA, text
    }
}

export default messagesReducer