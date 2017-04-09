import React from 'react'
import {render} from 'react-dom'
import '../public/css/style.css'
const Learn = (props) =>{
  const knowledge = props.learnList.map(function (link) {
  console.log("link ",link.ID)
  return(
  <tr>
    <td>
      {link.ID}
    </td>
    <td>
      {link.TECH}
    </td>
    <td>
      <a href={link.DOCS}>{link.DOCS}</a>
    </td>
    <td>
      <button
        type='button'
        className='close'
        onClick={ _ => props.onRemove(link.ID) }
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
