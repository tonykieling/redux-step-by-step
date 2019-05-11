import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  // state = {
  //   number:10
  // }

  // increase = () => {
  //   console.log("add")
  //   this.setState({
  //     number: this.state.number + 1
  //   })
  // }

  // decrease = () => {
  //   console.log("sub")
  //   this.setState({
  //     number: this.state.number - 1
  //   })
  // }
  
  
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

// export default App;

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
