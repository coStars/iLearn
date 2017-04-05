import React from 'react'
import {render} from 'react-dom'
const Learn = (props) => (
  <tr>
    <td>
      {props.tech}
    </td>
    <td>
      {props.children}
    </td>
    <td>
      <button
        type='button'
        className='close'
        onClick={ _ => props.onRemove(props.tech)}
      >
        <span>&times;</span>
      </button>
    </td>
  </tr>
)
export default Learn
