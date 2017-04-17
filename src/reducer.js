
function techsReducer(state = [], action) {
  switch (action.type) {
  case 'FETCH_POSTS_REQUEST' :
    return state
  case 'FETCH_POSTS_FAILURE' :
    return state
  case 'FETCH_POSTS_SUCCESS' :
    return action.payload
  default:
    return state
  }
}
export { techsReducer };
