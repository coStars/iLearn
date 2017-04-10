import { techsReducer } from './src/reducer.js';
const initialState = [];
const payload = {tech:'test',docs:'test',ID:1};
const add = {
  type: 'ADD',
  payload : payload
}

test('add test',()=>{
  expect(techsReducer(initialState, add)).toEqual([ payload ]);
})

test('remove test',()=>{
  expect(techsReducer([payload], {type: 'DELETE', payload: 1})).toEqual([]);
  expect(techsReducer([payload], {type: 'DELETE', payload: 2})).toEqual([payload]);
})
