import React from 'react'
import style from '../public/css/style.css'
class LearnForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TECH: '',
            DOCS: '',
            ID: 1
        }
    }
    addTechIfValid() {
        if (this.state.TECH.length && this.state.DOCS.length) {
            this.setState({
                ID: this.state.ID + 1
            })
            console.log("this.state.ID",this.state.ID);
            this.props.store.dispatch({
                type: 'ADD',
                payload: {
                    tech: this.state.TECH,
                    docs: this.state.DOCS,
                    id: this.state.ID
                }
            })
            this.setState({TECH: '', DOCS: ''})
        } else {
            console.log('You must insert data')
        }
    }
    changeTECH(ev) {
        this.setState({TECH: ev.target.value})
    }
    changeDOCS(ev) {
        this.setState({DOCS: ev.target.value})
    }
    render() {
        const buttonStyle = this.state.TECH.length && this.state.DOCS.length
            ? 'valid-button'
            : 'invalid-button'

        const inputStyle = this.state.TECH.length && this.state.DOCS.length
            ? 'valid-input'
            : 'invalid-input'
        return (
            <div>
                <div>
                    <div className='form-group'>
                        <label>TECH</label>
                        <input value={this.state.TECH} onChange={this.changeTECH.bind(this)} placeholder='teching' type='text' className={inputStyle} id='tech'/>
                    </div>
                    <div className='form-group'>
                        <label>DOCS</label>
                        <input value={this.state.DOCS} onChange={this.changeDOCS.bind(this)} placeholder='link' type='text' className={inputStyle} id='docs'/>
                    </div>
                    <div className='form-group'>
                        <button className='btn-default' onClick={this.addTechIfValid.bind(this)} id={buttonStyle}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default LearnForm
