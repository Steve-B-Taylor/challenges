import React, { useState } from "react"

const QuestionForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
  })
  const [errors, setErrors] = useState("")

  const handleChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newQuestion.question !== "" && newQuestion.answer !== "") {
      setErrors("")
      props.postQuestion(newQuestion)
      setNewQuestion({ question: "", answer: "" })
    } else {
      setErrors("All fields required")
    }
  }

  let errorMessage
  if (errors) {
    errorMessage = <h2>{errors}</h2>
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage}
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
