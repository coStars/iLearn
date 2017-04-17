
import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
// import LearnForm from './LearnForm.jsx'
// import LearnTable from './LearnTable.jsx'
import store from './store.js'
import AddContainer from './container/AddContainer.js'
import DisplyContainer from './container/DisplyContainer.js'
import {getAll,newPost,deleteItem} from './fetch.js'
const render = ()=>ReactDOM.render(
<Provider store={store}>
  <div>
    <AddContainer/>
    <DisplyContainer/>
  </div>

  </Provider>,
  document.getElementById('hello-world')
);
getAll()
render()
store.subscribe(render)

export default render
