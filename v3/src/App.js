import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div> <br /> <br />
      Number: <span> { this.props.number } </span> <br /> <br />
        <button onClick={this.props.increase}>Increase</button>
        <button onClick={this.props.decrease}>Decrease</button>
      </div>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({type:"INCREASE"}),
    decrease: () => dispatch({type:"DECREASE"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
