import React from 'react'
import {render} from 'react-dom'
import LearnTable from './LearnTable.jsx'
import LearnForm from './LearnForm.jsx'
import store from './reducer.js'
class Main extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            TECH: '',
            DOCS: '',
            buttonStyle: {
                validStyle: {
                    backgroundColor: 'green',
                    color: 'white'
                },
                invalidStyle: {
                    backgroundColor: 'red',
                    color: 'white',
                    borderColor: 'red'
                }
            },
            inputStyle: {
                validStyle: {
                    borderColor: 'green'
                },
                invalidStyle: {
                    borderColor: 'red'
                }
            }
        }
    }
    addTechIfValid() {
        if (this.state.TECH.length && this.state.DOCS.length) {
            store.dispatch({
                type: 'ADD',
                payload: {
                    tech: this.state.TECH,
                    docs: this.state.DOCS
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
    removeTeching(tech) {
        store.dispatch({type: 'DELETE', payload: tech})
    }
    render() {
        return (
            <div>
                <h1>ILearn</h1>
                <LearnForm addTechIfValid={this.addTechIfValid.bind(this)} changeTECH={this.changeTECH.bind(this)} changeDOCS={this.changeDOCS.bind(this)} TECH={this.state.TECH} DOCS={this.state.DOCS} buttonStyle={this.state.buttonStyle} inputStyle={this.state.inputStyle}/>
                <LearnTable learnList={this.props.data} onRemove={this.removeTeching.bind(this)}/>
            </div>
        )
    }
}
export default Main
