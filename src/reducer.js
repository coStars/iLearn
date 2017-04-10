
function techsReducer(state = [], action) {
  switch (action.type) {
  case 'DELETE':
    return state.filter(item=>
    item.ID != action.payload
  )
  case 'FETCH_POSTS_REQUEST' :
  // eslint-disable-next-line no-console
    console.log('Loading');
    return state
  case 'FETCH_POSTS_FAILURE' :
  // eslint-disable-next-line no-console
    console.log('error');
    return state
  case 'FETCH_POSTS_SUCCESS' :
    return state.concat(action.payload)
  default:
    return state
  }
}
export { techsReducer };
