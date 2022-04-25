import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from "./redux/state"

import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = () => {
  ReactDOM.render( 
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState())
reportWebVitals()

store.subscribe(rerenderEntireTree)