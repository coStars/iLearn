import React from 'react'
import {render} from 'react-dom'
import LearnList from './LearnList.js'
const Main = ()=>(
  <div>
  <h1>ILearn</h1>
  <LearnList  />
</div>
)
render(
  <Main/>,
  document.getElementById('hello-world')
);
