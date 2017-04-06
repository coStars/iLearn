import React from 'react'
import {render} from 'react-dom'
 import LearnTable from './LearnTable.jsx'
 import LearnForm from './LearnForm.jsx'
class Main extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    learnList: [],
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
addTechIfValid () {
  this.state.TECH.length && this.state.DOCS.length
  ? this.addLearn()
  : console.log('You must insert data')
}
changeTECH (ev) {
  this.setState({
    TECH: ev.target.value
  })
}
changeDOCS (ev) {
  this.setState({
    DOCS: ev.target.value
  })
}
addLearn () {
  this.state.learnList.push({
    tech: this.state.TECH,
    docs: <a target="_blank" href={this.state.DOCS}>{this.state.DOCS}</a>
  })
  this.setState({
    learnList: this.state.learnList,
    TECH: '',
    DOCS: ''
  })
}
removeTeching (tech) {
  this.setState({
    learnList: this.state.learnList.filter(function (link) {
      return link.tech !== tech
    })
  })
}
  render() {
    return (
       <div>
         <h1>ILearn</h1>
         <LearnForm
         addTechIfValid={this.addTechIfValid.bind(this)}
         changeTECH = {this.changeTECH.bind(this)}
         changeDOCS = {this.changeDOCS.bind(this)}
         TECH = {this.state.TECH}
         DOCS = {this.state.DOCS}
         buttonStyle = {this.state.buttonStyle}
         inputStyle = {this.state.inputStyle}
         />
         <LearnTable
          learnList={this.state.learnList}
          onRemove = {this.removeTeching.bind(this)}
          />
       </div>
    )
  }
}
export default Main
