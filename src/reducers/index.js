// Just a simple CombineReducer. It can be updated with
// your own reducers

import { combineReducers } from 'redux';
import SourceReducer from './SourceReducer';

const rootReducer = combineReducers({
  source: SourceReducer
});

export default rootReducer;