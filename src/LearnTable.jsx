import React from 'react'
import LearnList  from './LearnList.jsx';
const LearnTable = (props)=>{
  console.log('table',props);
return(
    <table className='table table-condensed'>
      <thead>
        <tr>
          <th>ID</th>
           <th>TECH</th>
           <th>DOCS</th>
           <th>EDIT & DELET</th>
        </tr>
      </thead>
        <LearnList
        learnList = {props.learnList}
        onRemove = {
          props.onRemove
        }
        update ={
          props.update
        }
        />
    </table>
)
}
export default LearnTable
