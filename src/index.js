import React from 'react'
import {render} from 'react-dom'
import BookList from './BookList.js'

const BookContentPage = (props) => (
    <div>
    <h1>ILearn</h1>
    <BookList bookList={props.bookList} />
  </div>
)
class Main extends React.Component {
  render () {
    const bookList = [{
      tech: 'elm',
      docs: <a href="http://www.elm-lang.org/">www.elm-lang.org</a>
    }]

    return (
      <BookContentPage
        bookList={bookList}
      />
    )
  }
}
render(
  <Main/>,
  document.getElementById('hello-world')
)
