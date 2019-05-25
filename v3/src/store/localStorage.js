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
// console.log("XYZstate:: ", state) 
  try {
    localStorage.setItem('state', state)
  } catch (err) {
    return err.message
  }
}