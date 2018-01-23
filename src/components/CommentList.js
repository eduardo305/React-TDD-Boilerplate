import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../actions/index';

class CommentList extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      comments: []
    };
  }

  componentDidMount () {
    this.props.fetchComments();
  }

  renderComments() {
    return this.props.comments.all.map((comment, i) => {
      return <div key={ comment._id }>{ comment.name.first}</div>;
    });
  }

  render() {
    return (
      <div className='CommentList'>
        { this.renderComments() }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    comments: store.comments
  };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);