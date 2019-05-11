// create the store within NodeJs environment
const { createStore } = require('redux');

// create initial state
// it can be any type of data structure
const initialState = {
  number: 10
}

// ### 1- CREATE REDUCER
// it is gonna receive
//  - state, which can be set to have a initial value as default parameter, and
//  - action, which has to have at least the type of the action. Also it's possible to pass value
//    that is, it's an object which two properties: type and value
//    the value can be ommited and inside the function it can be informed
// the reducer must be defined before create store due to that needs it
const myReducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === "ADD")
    newState.number = newState.number + action.value;
  if (action.type === "SUB")
    newState.number = newState.number - action.value;

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

store.dispatch({type: "ADD", value: 10});   // initialState (10) + 10 = 20
store.dispatch({type: "ADD", value: 82});   // state (20) + 82 = 102
store.dispatch({type: "SUB", value: 15});   // 102 - 15 = 87
store.dispatch({type: "ADD", value: 7});    // 94
store.dispatch({type: "SUB", value: 6});    // 88

console.log("final outcome is: ", store.getState()); // 88
