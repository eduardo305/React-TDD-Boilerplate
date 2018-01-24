import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoList extends Component {
  renderVideoList() {
    return this.props.videos.all.map(video => {
      return <div>{ video.snippet.title }</div>
    });
  }

  render() {
    return (
      <div className='VideoList'>{ this.renderVideoList() }</div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    videos: store.videos
  };
};

export default connect(mapStateToProps)(VideoList);