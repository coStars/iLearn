import React from 'react'
import '../public/css/style.css'
const LearnForm = (props)=>{
  const buttonStyle = props.TECH.length && props.DOCS.length
      ? props.buttonStyle.validStyle
      : props.buttonStyle.invalidStyle

      const inputStyle = props.TECH.length && props.DOCS.length
      ? props.inputStyle.validStyle
      : props.inputStyle.invalidStyle
return(
  <div>
    <div>
      <div className='form-group'>
        <label>TECH</label>
        <input
          value={props.TECH}
          onChange={props.changeTECH}
          placeholder='teching'
          type='text'
          className='form-control'
          id='tech'
          style={inputStyle}
        />
      </div>
      <div className='form-group'>
        <label>DOCS</label>
        <input
          value={props.DOCS}
          onChange={props.changeDOCS}
          placeholder='link'
          type='text'
          className='form-control'
          id='docs'
          style={inputStyle}
        />
      </div>
      <div className='form-group'>
        <button
          className='btn-default'
          onClick={props.addTechIfValid}
          style={buttonStyle}
        >
          Add
        </button>
      </div>
    </div>
  </div>
)
}
export default LearnForm
