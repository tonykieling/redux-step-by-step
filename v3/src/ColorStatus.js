import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class ColorStatus extends Component {
  render() {
    const zero = {"color": "blue"}
    // let v = zero
console.log("this.props:: ", this.props)
console.log("zero:: ", zero)
    return (
      <div style = {zero}>
        {/* {this.props.number % 2 === 0 ?
          v = this.zero :
          null} */}
        {this.props.number === 0 ?
          "Number is Zero" :
          this.props.number % 2 === 0 ?
            "Even number" :
            "It's Odd!"}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}

export default connect(mapStateToProps, null)(ColorStatus);
