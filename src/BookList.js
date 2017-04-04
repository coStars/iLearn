import React from 'react'
import Book  from './Book.js'
class BookList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bookList: props.bookList,
      bookTECH: '',
      bookDOCS: '',
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
    this.state.bookTECH.length && this.state.bookDOCS.length
    ? this.addBook()
    : console.log('You must insert data')
  }
  changeTECH (ev) {
    this.setState({
      bookTECH: ev.target.value
    })
  }
  changeDOCS (ev) {
    this.setState({
      bookDOCS: ev.target.value
    })
  }
  addBook () {
    this.state.bookList.push({
      tech: this.state.bookTECH,
      docs: <a target="_blank" href={this.state.bookDOCS}>{this.state.bookDOCS}</a>
    })

    this.setState({
      bookList: this.state.bookList,
      bookTECH: '',
      bookDOCS: ''
    })
  }
  removeBOOK (tech) {
    this.setState({
      bookList: this.state.bookList.filter(function (book) {
        return book.tech !== tech
      })
    })
  }

  render () {
    const books = this.state.bookList.map(function (book) {
      return (
        <Book
          tech={book.tech}
          key={book.tech}
          onRemove={this.removeBOOK.bind(this)}>
            {book.docs}
        </Book>
      )
    }, this)

    const buttonStyle = this.state.bookTECH.length && this.state.bookDOCS.length
    ? this.state.buttonStyle.validStyle : this.state.buttonStyle.invalidStyle

    const inputStyle = this.state.bookTECH.length && this.state.bookDOCS.length
    ? this.state.inputStyle.validStyle : this.state.inputStyle.invalidStyle

    return (
      <div>
        <div>
          <div className='form-group'>
            <label>TECH</label>
            <input
              value={this.state.bookTECH}
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
              value={this.state.bookDOCS}
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
            {books}
          </tbody>
        </table>
      </div>
    )
  }
}

BookList.defaultProps = {
  value: 'default'
}

BookList.propTypes = {
  bookTECH: React.PropTypes.string,
  bookDOCS: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  onChange: React.PropTypes.func
}

export default BookList
