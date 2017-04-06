import React from 'react'
import {render} from 'react-dom'
const Learn = (props) =>{
  const knowledge = props.learnList.map(function (link) {
  return(
  <tr>
    <td>
      {link.tech}
    </td>
    <td>
      {link.docs}
    </td>
    <td>
      <button
        type='button'
        className='close'
        onClick={ _ => props.onRemove(link.tech)}
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
