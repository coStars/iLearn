import React from 'react'
import {render} from 'react-dom'
import '../public/css/style.css'
import update from './UpdateForm.jsx'
const Learn = (props) =>{
  const knowledge = props.learnList.map(function (link) {
  return(
  <tr>
    <td>
      {link.id}
    </td>
    <td>
      {link.tech}
    </td>
    <td>
      <a href={link.docs}>{link.docs}</a>
    </td>
    <td>
      <button
        type='button'
        onClick={()=>update(link)}
      >
        Edit
      </button>
      <button
        type='button'
        className='close'
        onClick={ _ => props.onRemove(link.id) }
      >
        <span>&times;</span>
      </button>
    </td>
  </tr>
)
})
return (
  <tbody>
  {knowledge}
  </tbody>
)
}
export default Learn
