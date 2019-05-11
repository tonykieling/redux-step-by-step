
const initialState = {
  number: 0
}

const reducer = (state = initialState, action) => {
  const newState = {...state};

  if (action.type === "ADD")
    newState.number += 1;

  return newState
}

export default reducer;