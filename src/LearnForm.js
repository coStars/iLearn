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
    <table className='table table-condensed'>
      <thead>
        <tr>
           <th>TECH</th>
           <th>DOCS</th>
           <th></th>
        </tr>
      </thead>
      <tbody>
        {knowledge}
      </tbody>
    </table>
  </div>
)
export default LearnForm
