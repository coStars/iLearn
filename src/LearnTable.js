import React from 'react'
import Learn  from './Learn.js';
import '../public/css/style.css'
const LearnTable = (props)=>{
  console.log(props.learnList.length)
return(
    <table className='table table-condensed'>
      <thead>
        <tr>
           <th>TECH</th>
           <th>DOCS</th>
           <th></th>
        </tr>
      </thead>
        <Learn
        key={props.learnList.length}
        learnList = {props.learnList}
        onRemove = {props.onRemove}
        />
    </table>
)
}
export default LearnTable
