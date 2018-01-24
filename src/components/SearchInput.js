import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions/index';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: ''
    };

    this.props.fetchVideos('Norah Jones');
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return <input 
      type='text' 
      placeholder='What do you wanna watch?'
      value={ this.state.query }
      onChange={ this.handleChange }
      />
  }
}

export default connect(null, { fetchVideos })(SearchInput);