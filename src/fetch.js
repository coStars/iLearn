/* eslint-disable */

import store from './store.js'
const newPost = (data)=>{
  fetch('/data',{
    method: 'POST',
    body:JSON.stringify(data)
  })
  .then((res)=>{
    return  res.json()
  })
.then((response)=>{
  store.dispatch({type:'FETCH_POSTS_SUCCESS',payload:response})
}).catch((err) =>{
  store.dispatch({type:'FETCH_POSTS_FAILURE'})
})}
export {newPost}
