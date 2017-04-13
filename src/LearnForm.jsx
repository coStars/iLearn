import React from 'react'
import style from '../public/css/style.css'
import {getAll} from './fetch.js'

class LearnForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tech: '',
            docs: ''
        }
    }
    addTechIfValid() {
        if (this.state.tech.length && this.state.docs.length) {
            this.props.addTech(this.state)
            this.setState({tech: '', docs: ''})
            getAll()
        } else {
            alert ('You must insert data')
        }
    }

    changeTECH(ev) {
        this.setState({tech: ev.target.value})
    }
    changeDOCS(ev) {
        this.setState({docs: ev.target.value})
    }
    render() {
        const buttonStyle = this.state.tech.length && this.state.docs.length
            ? 'valid-button'
            : 'invalid-button'

        const inputStyle1 = this.state.tech.length > 0
            ? 'valid-input'
            : 'invalid-input'
        const inputStyle2 =  this.state.docs.length > 0
            ? 'valid-input'
            : 'invalid-input'
        return (
            <div>
                <div>
                    <div className='form-group'>
                        <label>TECH</label>
                        <input
                        value={this.state.tech}
                        onChange={this.changeTECH.bind(this)}
                        placeholder='teching'
                        type='text'
                        className={inputStyle1}
                        id='tech'
                        />
                    </div>
                    <div className='form-group'>
                        <label>DOCS</label>
                        <input
                        value={this.state.docs}
                        onChange={this.changeDOCS.bind(this)}
                        placeholder='link'
                        type='text'
                        className={inputStyle2}
                        id='docs'
                        />
                    </div>
                    <div className='form-group'>
                        <button
                        className='btn-default'
                        onClick={this.addTechIfValid.bind(this)}
                        id={buttonStyle}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default LearnForm
