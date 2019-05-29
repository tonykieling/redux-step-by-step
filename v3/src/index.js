import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer.js'
import { getState, saveState } from './store/localStorage.js'

// const persistedData = getState()
// console.log("persistedData: ", persistedData)

const store = createStore(
  reducer,
  // persistedData,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // line above is just to allows to use the devtools
);


// store.subscribe(() => {
//   const value = JSON.stringify(store.getState())
//   saveState({'state': value} )
//   console.log(`changing state: ${JSON.stringify(getState())}`)
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
