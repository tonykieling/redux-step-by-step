import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons.js'
import Counter from './Counter.js'
import ColorStatus from './ColorStatus.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div> <br /> <br />
        <Counter />
        <Buttons />
        <ColorStatus />
      </div>
        
      </div>
    );
  }
}

export default (App);
