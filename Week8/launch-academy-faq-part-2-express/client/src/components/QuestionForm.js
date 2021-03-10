import React, { useState } from "react"

const QuestionForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  })

  const handleChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.postQuestion(newQuestion)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">What do you want to know? </label>
      <br />

      <input
        id="question"
        type="text"
        name="question"
        value={newQuestion.question}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="answer">Answer: </label>
      <br />

      <input
        id="answer"
        type="text"
        name="answer"
        value={newQuestion.answer}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Add this Question" />
    </form>
  )
}

export default QuestionForm
