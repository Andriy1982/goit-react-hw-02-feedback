import React, { Component } from 'react';
import Controls from './Controls'
import Span from './Span'
// import PropTypes from 'prop-types';

export default class App extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleButtonIncrement = e => {
    console.log('Click on the Increment', e.target);
    const { target } = e;
    this.setState((prevState, props) => {
      return { value: prevState.value + props.step };
    });
  };

  handleButtonDecrement = e => {
    console.log('Click on the Decrement', e.target);
    const { target } = e;
    this.setState((prevState, props) => {
      return { value: prevState.value - props.step };
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Hello World</h1>
          <Controls
            increment={this.handleButtonIncrement}
            decrement={this.handleButtonDecrement}
          >
          
            
          </Controls>
          <Span value = {this.state.value}/>
          {/* <button type="button" onClick={this.handleButtonIncrement}>Increment</button> */}
          {/* <span style={{ fontSize: '30px' }}>{this.state.value}</span> */}
          {/* <button type="button" onClick={this.handleButtonDecrement}>Decrement</button> */}
        </div>
      </>
    );
  }
}
