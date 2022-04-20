import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { addPost } from './redux/state';
import { updateNewPostData } from './redux/state';

import { addMessage } from './redux/state';
import { updateNewMessageData } from './redux/state'

import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}

          addPost={addPost}
          updateNewPostData={updateNewPostData}
          
          addMessage={addMessage}
          updateNewMessageData={updateNewMessageData}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

reportWebVitals()