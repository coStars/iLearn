import React from 'react'

const inputStyle = {}
const buttonStyle = {}

const LearnForm = (props)=>(
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
          className='btn btn-default'
          onClick={props.addTechIfValid}
          style={buttonStyle}
        >
          Add
        </button>
      </div>
    </div>
  </div>
)
export default LearnForm
