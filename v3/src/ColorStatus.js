import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class ColorStatus extends Component {
  render() {
    const zero = {"color": "black"}
    const even = {"color": "blue"}
    const odd = {"color": "red"}
    let v = zero
// console.log("this.props:: ", this.props)
// console.log("zero:: ", zero)
    return (
      <div style = {v}>
        {/* {this.props.number % 2 === 0 ?
          v = even :
          v = odd} */}
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
