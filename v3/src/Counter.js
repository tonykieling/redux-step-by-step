import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import store from './store/store.js'

class Counter extends Component {
  render() {
    // console.log("abc: ", store.getState().number)
    return (
      <div>
        Number: <span> { this.props.number } </span> <br /> <br />
        {/* Number: <span> { store.getState().number } </span> <br /> <br /> */}
      </div>
    );
  }
}

// store.subscribe(() => {
//   const x = store.getState().number;
//   }
// )
// todo
// NEED TO CREATE store in a place, call it inside index.js and here in order to access getState method
// IT SEEMS store.getState doesnt update inside the JSX
// it means we need to use mapStateToProps

const mapStateToProps = store => {
  return {
    number: store.number
  }
}

export default connect(mapStateToProps, null)(Counter);
// export default Counter;
