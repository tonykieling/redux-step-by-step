## What is this?
"redux-step-by-step" project is a simple React application which performs some actions in order to Increase (1 or 10), Decrease (1 or 10) and Reset a Counter component and shows its type (Zero, Even or Odd).  
It keeps state because I am using localStorage to storage the state on the browser, which allows to access that state in another tab browser or even after the user reboots the system.  
Behind the scenes the sates are being managed by a redux store, as well.  
The main goal here is practice and doc the tasks envolved to create the situation above.   


### How to deal with redux
1- Install react-redux and redux by:  
  1.1- npm i react-redux  
  1.2- npm i redux  

2- In order to have redux globally, in the hights structure in our React project (index.js), we have to:  
  2.1- import { Provider } from 'react-redux'  
  2.2- import { createStore } from 'redux'  
  2.3- import reducer from './store/reducer.js'  

3- The store has to be create in index.js, and passed as paramenter for Provider, which wrappers the app, allowing to use store in the entiry application.  

4- In order to create store, it should receive reducer, according line 10  

5- The reducer has an initialState and it performs the changes according the actions and values received.  
p.s. value in optional, but if not received, the action has to define its value to execute some calculus  

6- In the App.js, create the methods to map dispatch to props (mapDispatchToProps) and map state to props (mapStateToProps) - outiside the component, as two separeted functions.  

7- Also, `import { connect } from 'react-redux'` due to connect the functions above with the App.  


### about localStorage
- run `localStorage` on the browser to check all the current content at localStorage  
- run `localStorage.clear()` to clean all current content at localStorage  
- run `localStorage.setItem('nameOfKey', 'itsValue')` will record a key/value
- run `localStorage.getItem('nameOfKey)` will get the value searching by its key
- run `localStorage.removeItem('nameOfKey')` in order to remove an item by its key

### How to run this app
after clone/download the repo,  
- run `npm i` in order to install all necessary pachages,  
- run `npm start` to fire the server,  
- open the browser on `http://0.0.0.0:3000`
***p.s.***
open the browser console to check the states, regarding the above section (about localStorage)