import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from "./render.js"
import state from "./redux/state"

rerenderEntireTree(state)
reportWebVitals()