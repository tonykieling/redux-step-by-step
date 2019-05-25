// this module allows persist the data in localStorage

export const getState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState)
      return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = ({ state }) => {
console.log("XYZstate:: ", state) 
  try {
    // const serializedState = JSON.stringify(state)
    // console.log("before- ", JSON.stringify(localStorage.getItem('state')))
    localStorage.setItem('state', state)
    // console.log("after- ", JSON.stringify(localStorage.getItem('state')))
  } catch (err) {
    return err.message
  }
}