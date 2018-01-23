import React from 'react';

export default (props) => {
  const { comment } = props;
  return (
    <div className='CommentItem'>
      <img src={ comment.picture.thumbnail } />
      <div className='Description'>
        <div className='Username'>{ comment.name.first }</div>
        <div className='Comment'>
          lorem
        </div>
      </div>
    </div>
  );
};