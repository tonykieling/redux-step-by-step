import { createStore } from 'redux'
import reducer from './reducer.js'
import { getState, saveState } from './localStorage.js'

const persistedData = getState()
console.log("persistedData: ", persistedData)

const store = createStore(
  reducer,
  persistedData,
  // undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // line above is just to allows to use the devtools
);


store.subscribe(() => {
  const value = JSON.stringify(store.getState())
  saveState({'state': value} )
  console.log(`changing state: ${JSON.stringify(getState())}`)
})

export default store