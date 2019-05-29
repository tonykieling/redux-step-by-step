import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        Number: <span> { this.props.number } </span> <br /> <br />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    number: store.number
  }
}

export default connect(mapStateToProps, null)(Counter);
