import React from 'react'
import LearnList  from './LearnList.jsx';
const LearnTable = (props)=>{
return(
    <table className='table table-condensed'>
      <thead>
        <tr>
           <th>TECH</th>
           <th>DOCS</th>
           <th>DELET</th>
        </tr>
      </thead>
        <LearnList
        key={props.learnList.length}
        learnList = {props.learnList}
        onRemove = {props.onRemove}
        />
    </table>
)
}
export default LearnTable
