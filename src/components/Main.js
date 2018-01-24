import React from 'react';

import CommentList from './CommentList';
import VideoList from './VideoList';

export default () => {
  return (
    <div className='Main'>
      <VideoList />
      <CommentList />
    </div>
  );
};
