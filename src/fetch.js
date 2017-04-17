/* eslint-disable */

import store from './store.js'
const newPost = (data)=>{
  fetch('/learn',{
    method: 'POST',
    body:JSON.stringify(data)
  })
  .then((res)=>{
    return  res.json()
  })
.then((response)=>{
  console.log('response',response);
  store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: response});
}).catch((err) =>{
  store.dispatch({type:'FETCH_POSTS_FAILURE'})
})}

const getAll = ()=> {
    fetch('/learn',{method:'GET'})
    .then(res => res.json())
    .then((response) => {
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: response});
    }).catch((err) => {
      store.dispatch({type:'FETCH_POSTS_FAILURE'})

    })

};
const deleteItem = (id)=> {
    const url = '/learn/'+`${id}`;
    fetch(url,{method:'DELETE'})
    .then(res => res.json())
    .then((response) => {
      console.log('store befor delete',store.getState().techs);
        store.dispatch({type: 'FETCH_POSTS_SUCCESS', payload: response});
        console.log('store AFTER delete',store.getState().techs);

    }).catch((err) => {
      store.dispatch({type:'FETCH_POSTS_FAILURE'})
    });
};

const dataUpdate = (data)=>{
  console.log('fetch!!');
  fetch('/learn',{
    method: 'PUT',
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

export {newPost,getAll,deleteItem,dataUpdate}
