
const initialState = {
  number: 0,
  type: "zero"
}

// console.log("BEfore-initialState:: ", initialState)

const reducer = (state = initialState, action) => {
  // console.log("after-state:: ", state)
// const reducer = (state, action) => {
//   if (!state)
//     state = {
//       number:0,
//       type: "zero"
//     }
  const newState = {...state};
  if (action.type === "INCREASE")
    newState.number += 1;
  if (action.type === "INCREASE10")
    newState.number += 10;
  if (action.type === "DECREASE")
    newState.number -= 1;
  if (action.type === "DECREASE10")
    newState.number -= 10;
  if (action.type === "RESET")
    newState.number = 0;

  (newState.number === 0) ?
    (newState.type = "zero") :
    ((newState.number % 2 === 0) ?
      newState.type = "even" :
      newState.type = "odd")

  return newState
}

export default reducer;
