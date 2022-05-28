import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"

let store = {
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.messages = messagesReducer(this._state.messages, action)
        this._callSubscriber(this._state)

    }

}

export default store