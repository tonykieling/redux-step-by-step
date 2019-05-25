import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer.js'
import { getState, saveState } from './store/localStorage.js'

const persistedData = getState()
console.log("persistedData: ", persistedData)

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  persistedData  
);


store.subscribe(() => {
  console.log(`BEFORE:
  store.getState = ${JSON.stringify(store.getState())}
  getState = ${getState()}`)
  // saveState(store.getState())
  // saveState('number', store.get)
  console.log(`after:
  store.getState = ${JSON.stringify(store.getState().number)}
  getState = ${getState()}`)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
