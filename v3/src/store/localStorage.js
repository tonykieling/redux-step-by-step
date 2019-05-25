// this module allows persist the data in localStorage

export const getState = () => {
  try {
    const serializedState = localStorage.getItem('status')
    if (!serializedState)
      return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    return err.message
  }
}