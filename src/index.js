import React from 'react'
import {render} from 'react-dom'

 import LearnTable from './LearnTable.js'
 import LearnForm from './LearnForm.js'

class Main extends React.Component {
  render() {
    return (
       <div>
         <h1>alaaa - it works!</h1>
         <LearnForm/>
         <LearnTable/>
       </div>
    )
  }
}

render(
  <Main />,
  document.getElementById('hello-world')
);
