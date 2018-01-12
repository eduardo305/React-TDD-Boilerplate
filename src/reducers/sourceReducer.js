// This is just a simple reducer example. It can be completely removed.

export default function(state = { source: 'the-economist' } , action) {
  switch (action.type) {
    case 'SET_SOURCE':
      return { ...state, source: action.payload }
  
    default:
      return state;
  }
}