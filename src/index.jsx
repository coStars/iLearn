
import React from 'react'
import ReactDOM from 'react-dom'
import LearnForm from './LearnForm.jsx'
import LearnTable from './LearnTable.jsx'
import store from './store.js'
import {getAll,newPost,deleteItem} from './fetch.js'
const render = ()=>ReactDOM.render(
  <div>
      <h1>ILearn</h1>
      <LearnForm addTech={tech=>newPost(tech)}/>
      <LearnTable learnList={store.getState().techs}
      onRemove={id => deleteItem(id)}/>
  </div>,
  document.getElementById('hello-world')
);

getAll()
render()
store.subscribe(render)
