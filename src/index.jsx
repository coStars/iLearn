import Main from './Main.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './reducer.js'
const render = ()=>ReactDOM.render(
  <Main data={store.getState().techs} />,
  document.getElementById('hello-world')
);
render()
store.subscribe(render)
