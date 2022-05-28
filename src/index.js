import React from 'react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'
import store from "./redux/redux-store"
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container)

export const rerenderEntireTree = () => {
  root.render( 
    <React.StrictMode>
      <Router>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </Router>
    </React.StrictMode>,
  )
}

rerenderEntireTree(store.getState())
reportWebVitals()

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})