import { FETCH_VIDEOS } from '../actions/types';

export default function (state = { all: [] }, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}