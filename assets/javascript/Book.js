import React from 'react'
const Book = (props) => (
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
        onClick={ () => props.onRemove(props.tech).bind(this)}
      >
        <span>&times;</span>
      </button>
    </td>
  </tr>
)
export default Book
