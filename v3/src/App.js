import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    number:10
  }

  add = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  sub = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div className="App">
      <div> <br /> <br />
      Number: <span> { this.state.number } </span> <br /> <br />
        <button onClick={this.add}>Increase</button>
        <button onClick={this.sub}>Decrease</button>
      </div>
        
      </div>
    );
  }
}

export default App;
