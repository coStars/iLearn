import { techsReducer } from '../src/reducer.js';
const initialState = [];
const payload = {tech:'test',docs:'test',id:1};
const request = {
  type: 'FETCH_POSTS_REQUEST',
  payload : payload
}
const failure = {
  type: 'FETCH_POSTS_FAILURE',
  payload : payload
}
const success = {
  type: 'FETCH_POSTS_SUCCESS',
  payload : payload
}

test('FETCH_POSTS_REQUEST : should return the initialState until the requset become successfuly ',()=>{
  expect(techsReducer(initialState, request))
  .toEqual(initialState);
})

test('FETCH_POSTS_SUCCESS : the request was successed and return the data that fetched ',()=>{
  expect(techsReducer(initialState, success)).toEqual([payload]);
})

test('FETCH_POSTS_FAILURE : should return the initialState  ',()=>{
  expect(techsReducer(initialState,failure)).toEqual(initialState)
})
