import React, { useState, useEffect } from "react"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

import BookForm from './BookForm'
import ErrorList from "./ErrorList"

const App = (props) => {
  const [books, setBooks] = useState([])
  const [errors, setErrors] = useState({})

  const addBook = (formPayload) => {
    console.log("Form submitted!") // Replace this with a fetch!
  }

  useEffect(() => {
    // your code here
  })

  const bookListItems = books.map(book => {
    return <li key={book.id}>{book.title}</li>;
  })

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {bookListItems}
      </ul>
      <hr />
      <ErrorList errors={errors} />
      <BookForm addBook={addBook} />
    </div>
  )
}

export default hot(App)
