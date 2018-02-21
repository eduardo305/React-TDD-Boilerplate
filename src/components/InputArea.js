import React, { Component } from 'react';

class InputArea extends Component {
  state = {
    value: ''
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleClick = () => {
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <div className='InputArea'>
        <input
          onChange={ this.handleChange }
          value={ this.state.value } />
        <button onClick={ this.handleClick }>Add</button>
      </div>
    );
  }
}

export default InputArea;