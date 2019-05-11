# redux-step-by-step

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