import {createStore} from 'redux'
function counter(state = [], action) {
  switch (action.type) {
  case 'ADD':
    return state.concat(action.payload);
  case 'DELETE':
    return state.filter((item) => {
      return item.tech !== action.payload
    })
  default:
    return state
  }
}
var store = createStore(counter)
export default store
