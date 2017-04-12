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
}).catch((err) =>{
  store.dispatch({type:'FETCH_POSTS_FAILURE'})
})}

const getAll = ()=> {
    fetch('/data',{method:'GET'})
    .then(res => res.json())
    .then((result) => {
      store.getState().techs = []
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
    }).catch(() => {
    });

};
const deleteItem = (id)=> {
    const url = '/delete/'+`${id}`;
    fetch(url,{method:'DELETE'})
    .then(res => res.json())
    .then((result) => {
      store.getState().techs = []
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: result});
    }).catch(() => {
    });
};

const dataUpdate = (data)=>{
  fetch('/update',{
    method: 'POST',
    body:JSON.stringify(data)
  })
  .then((res)=>{
    return  res.json()
  })
.then((response)=>{
    //store.dispatch({type:'FETCH_POSTS_SUCCESS',payload:response})
}).catch((err) =>{
  store.dispatch({type:'FETCH_POSTS_FAILURE'})
})}

export {newPost,getAll,deleteItem,dataUpdate}
