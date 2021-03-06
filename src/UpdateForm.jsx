import React from 'react'
import ReactDOM from 'react-dom'
//import Update from './UpdateData.js'
import Display from './index.jsx'
import {getAll,dataUpdate} from './fetch.js'
class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    console.log('props',props);
    this.state = {
      tech: this.props.newData.tech,
      docs: this.props.newData.docs
    }
  }
  // addTechIfValid() {
  //   if (this.state.tech.length && this.state.docs.length) {
  //     this.props.addTech(this.state)
  //     this.setState({tech: '', docs: ''})
  //     //getAll()
  //   } else {
  //       console.log('You must insert data')
  //   }
  // }

  changeTECH(ev) {
    this.setState({tech: ev.target.value})
  }
  changeDOCS(ev) {
    this.setState({docs: ev.target.value})
  }
  render() {
    const buttonStyle = this.state.tech.length && this.state.docs.length
        ? 'valid-button btn-default'
        : 'invalid-button btn-default'

    const inputStyle1 = this.state.tech.length > 0
        ? 'valid-input'
        : 'invalid-input'
    const inputStyle2 = this.state.docs.length > 0
        ? 'valid-input'
        : 'invalid-input'
    return (
            <div>
                <h1>Update Data</h1>
                <div className='update-from'>
                    <div className='form-group'>
                        <label>TECH</label>
                        <input
                          value={this.state.tech}
                          onChange={this.changeTECH.bind(this)}
                          placeholder='teching'
                          type='text'
                          className={inputStyle1}
                        />
                    </div>
                    <div className='form-group'>
                        <label>DOCS</label>
                        <input
                          value={this.state.docs}
                          onChange={this.changeDOCS.bind(this)}
                          placeholder={this.props.newData.docs}
                          type='text'
                          className={inputStyle2}
                        />
                    </div>
                    <div className='form-group'>
                        <button
                          className={buttonStyle}
                          onClick={
                            ()=>dataUpdate(Object.assign(
                              this.props.newData, this.state))
                          }
                        >
                            Update
                        </button>
                        <button className='valid-button btn-default' onClick={Display}>
                            Cancle
                        </button>
                    </div>
                </div>
            </div>
    )
  }
}
function update(props) {
  ReactDOM.render(
    <UpdateForm newData={props}/>, document.getElementById('hello-world'))
}
export default update
