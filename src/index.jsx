
import React from 'react'
import ReactDOM from 'react-dom'
import LearnForm from './LearnForm.jsx'
import LearnTable from './LearnTable.jsx'
import store from './store.js'
import {newPost} from './fetch.js'
const render = ()=>ReactDOM.render(
  <div>
      <h1>ILearn</h1>
      <LearnForm addTech={tech=>newPost(tech)}/>
      <LearnTable learnList={store.getState().techs}
      onRemove={id => store.dispatch({type: 'DELETE', payload: id})}/>
  </div>,
  document.getElementById('hello-world')
);
render()
store.subscribe(render)
