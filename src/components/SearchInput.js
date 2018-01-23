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
    console.log(this.props);
    return <input 
      type='text' 
      placeholder='What do you wanna watch?'
      value={ this.state.query }
      onChange={ this.handleChange }
      />
  }
}

const mapStateToProps = (store) => {
  return {
    videos: store.videos
  };
}

export default connect(mapStateToProps, { fetchVideos })(SearchInput);