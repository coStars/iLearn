import React from 'react'
import Learn  from './Learn.js';
const data = {
  tech : 'alaa',
  docs : 'ghada'
}

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
        <Learn  docs = {data.docs} tech = {data.tech}/>
      </tbody>
    </table>
)
export default LearnTable
