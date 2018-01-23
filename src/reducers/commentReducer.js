import { FETCH_COMMENTS } from '../actions/types';

export default function( state = { all: [] }, action) {
  switch(action.type) {
    case FETCH_COMMENTS:
      return { ...state, all: action.payload.data.data };
    default:
      return state;
  }
}