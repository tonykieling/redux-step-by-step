import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class ColorStatus extends Component {
  render() {
    let v = {color: "grey"}
    if (this.props.type === "zero")
      v.color = "grey"
    else if (this.props.type === "even")
      v.color = "blue"
    else if (this.props.type === "odd")
      v.color = "red"

    return (
      <div style = {v}>
        {this.props.number === 0 ?
          "Number is Zero" :
          this.props.number % 2 === 0 ?
            "Even number" :
            "It's Odd!"}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.number,
    type: state.type
  }
}

export default connect(mapStateToProps, null)(ColorStatus);
