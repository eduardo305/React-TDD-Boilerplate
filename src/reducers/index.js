// Just a simple CombineReducer. It can be updated with
// your own reducers

import { combineReducers } from 'redux';
import CommentReducer from './commentReducer';
import VideoReducer from './videoReducer';

const rootReducer = combineReducers({
  comments: CommentReducer,
  videos: VideoReducer
});

export default rootReducer;