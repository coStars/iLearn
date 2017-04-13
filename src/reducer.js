
function techsReducer(state = [], action) {
  switch (action.type) {
  case 'DELETE':
    return state.filter(item=>
    item.ID != action.payload
  )
  case 'FETCH_POSTS_REQUEST' :
    return state
  case 'FETCH_POSTS_FAILURE' :
    return state
  case 'FETCH_POSTS_SUCCESS' :
    return state.concat(action.payload)
  default:
    return state
  }
}
export { techsReducer };
