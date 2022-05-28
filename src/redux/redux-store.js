import { legacy_createStore as createStore, combineReducers } from "redux"

import messagesReducer from "./messages-reducer"
import navReducer from "./nav-reducer"
import profileReducer from "./profile-reducer"

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    nav: navReducer
})

let store = createStore(reducers)

export default store