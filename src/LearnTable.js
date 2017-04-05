import React from 'react'
import Learn  from './Learn.js';

const LearnTable = (props)=>(
    <table className='table table-condensed'>
      <thead>
        <tr>
           <th>TECH</th>
           <th>DOCS</th>
           <th></th>
        </tr>
      </thead>
      <tbody>
        <Learn tech={"alaa"}/>
      </tbody>
    </table>
)
export default LearnTable
