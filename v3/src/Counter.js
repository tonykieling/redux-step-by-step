import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
const store = require('./index.js')

class Counter extends Component {
  render() {
    return (
      <div>
        {/* Number: <span> { this.props.number } </span> <br /> <br /> */}
        Number: <span> { this.store.getState() } </span> <br /> <br />
      </div>
    );
  }
}

// todo
// NEED TO CREATE store in a place, call it inside index.js and here in order to access getState method

// const mapStateToProps = store => {
//   return {
//     number: store.number
//   }
// }

// export default connect(mapStateToProps, null)(Counter);
export default Counter;
