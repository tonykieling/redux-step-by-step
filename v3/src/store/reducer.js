
const initialState = {
  number: 0
}

const reducer = (state = initialState, action) => {
  const newState = {...state};

  if (action.type === "INCREASE")
    newState.number += 1;
  if (action.type === "DECREASE")
    newState.number -= 1;
  if (action.type === "RESET")
    newState.number = 0;

  return newState
}

export default reducer;
