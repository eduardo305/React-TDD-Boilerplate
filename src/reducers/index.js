// Just a simple CombineReducer. It can be updated with
// your own reducers

import { combineReducers } from 'redux';
import CommentReducer from './commentReducer';

const rootReducer = combineReducers({
  comments: CommentReducer
});

export default rootReducer;