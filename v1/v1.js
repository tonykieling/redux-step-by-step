// create the store within NodeJs environment
const { createStore } = require('redux');

// create initial state
// it can be any type of data structure
const initialState = {
  number: 10
}

// ### 1- CREATE REDUCER
// it is gonna receive the
//  - state, which can be set to have a initial value as default parameter, and
//  - action, which has to have at least the type of the action. Also it's possible to pass value
//    that is, it's an object which two properties: type and value
//    the value can be ommited and inside the function it can be informed
// the reducer must be defined before create store due to that needs it
const myReducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === "ADD")
    newState.number = newState.number + 1;
  if (action.type === "SUB")
    newState.number = newState.number - 1;

  //either the value is gonna be changed and returned, or just returned - in case no changes
  return newState;
}

// ### 2- CREATE STORE
console.log("create store");
const store = createStore(myReducer);

// ### 3- SUBSCRIBE
// it is gonna be executed every time a change happens
store.subscribe(() => {
  console.log("state changed: ", store.getState());
})


// ### 4- DISPATCH
// it actually acts over the store and order the changes

store.dispatch({type: "ADD"});  // initialState (10) + 1 = 11
store.dispatch({type: "ADD"});  // state (11) + 1 = 12
store.dispatch({type: "SUB"});  // 12 - 1 = 11
store.dispatch({type: "ADD"});  // 12
store.dispatch({type: "SUB"});  // 11

console.log("final outcome is: ", store.getState()); // 11
