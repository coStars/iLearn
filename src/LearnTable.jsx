import React from 'react'
import LearnList  from './LearnList.jsx';
const LearnTable = (props)=>{
return(
    <table className='table table-condensed'>
      <thead>
        <tr>
          <th>ID</th>
           <th>TECH</th>
           <th>DOCS</th>
           <th>DELET</th>
        </tr>
      </thead>
        <LearnList
        learnList = {props.learnList}
        onRemove = {props.onRemove}
        />
    </table>
)
}
export default LearnTable
