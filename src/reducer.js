function techsReducer(state = [], action) {
  switch (action.type) {
  case 'ADD':
    return state.concat(action.payload);
  case 'DELETE':
    return state.filter(
      (item) =>
        item.ID !== action.payload
    )
  default:
    return state
  }
}
export { techsReducer };
