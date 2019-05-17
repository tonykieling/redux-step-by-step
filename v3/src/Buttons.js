import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increase}>Increase</button>
        <button onClick={this.props.increase10}>Increase 10</button>
        <button onClick={this.props.decrease}>Decrease</button>
        <button onClick={this.props.decrease10}>Decrease 10</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({type:"INCREASE"}),
    increase10: () => dispatch({type:"INCREASE10"}),
    decrease: () => dispatch({type:"DECREASE"}),
    decrease10: () => dispatch({type:"DECREASE10"}),
    reset: () => dispatch({type:"RESET"}),
  }
}

export default connect(null, mapDispatchToProps)(Buttons);
