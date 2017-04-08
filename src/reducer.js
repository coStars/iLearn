import {createStore,combineReducers} from 'redux'
function techsReducer(state = [], action) {
  switch (action.type) {
  case 'ADD':
    return state.concat(action.payload);
  case 'DELETE':
    return state.filter(item =>
     item.id !== action.payload
    )
  default:
    return state
  }
}

const reducers = combineReducers({
  techs: techsReducer
});
var store = createStore(reducers)
export default store
