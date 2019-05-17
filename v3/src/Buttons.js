import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increase}>Increase</button>
        <button onClick={this.props.decrease}>Decrease</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({type:"INCREASE"}),
    decrease: () => dispatch({type:"DECREASE"}),
    reset: () => dispatch({type:"RESET"}),
  }
}

export default connect(null, mapDispatchToProps)(Buttons);
