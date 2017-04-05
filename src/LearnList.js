import React from 'react'
import Learn  from './Learn.js'

class LearnList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      LearnList: [],
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
    this.state.LearnList.push({
      tech: this.state.TECH,
      docs: <a target="_blank" href={this.state.DOCS}>{this.state.DOCS}</a>
    })

    this.setState({
      LearnList: this.state.LearnList,
      TECH: '',
      DOCS: ''
    })
  }
  removeTeching (tech) {
    this.setState({
      LearnList: this.state.LearnList.filter(function (link) {
        return link.tech !== tech
      })
    })
  }

  render () {
    const knowledge = this.state.LearnList.map(function (link) {
      return (
        <Learn
          tech={link.tech}
          key={link.tech}
          onRemove={this.removeTeching.bind(this)}>
            {link.docs}
        </Learn>
      )
    }, this)

    const buttonStyle = this.state.TECH.length && this.state.DOCS.length
    ? this.state.buttonStyle.validStyle
    : this.state.buttonStyle.invalidStyle

    const inputStyle = this.state.TECH.length && this.state.DOCS.length
    ? this.state.inputStyle.validStyle
    : this.state.inputStyle.invalidStyle

    return (
      <div>
        <div>
          <div className='form-group'>
            <label>TECH</label>
            <input
              value={this.state.TECH}
              onChange={this.changeTECH.bind(this)}
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
              value={this.state.DOCS}
              onChange={this.changeDOCS.bind(this)}
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
              onClick={this.addTechIfValid.bind(this)}
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
  }
}

LearnList.defaultProps = {
  value: 'default'
}

LearnList.propTypes = {
  TECH: React.PropTypes.string,
  DOCS: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  onChange: React.PropTypes.func
}

export default LearnList
