import {techsReducer} from './reducer.js'
import {createStore,combineReducers} from  'redux';
const reducers = combineReducers({
  techs: techsReducer
});
var store = createStore(
  reducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
