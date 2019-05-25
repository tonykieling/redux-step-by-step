// this module allows persist the data in localStorage and keep the data among different browser tabs, and after the user rebooting the system, as well

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
  try {
    localStorage.setItem('state', state)
  } catch (err) {
    return err.message
  }
}