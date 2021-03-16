import React, { useState, useEffect } from "react"
import Question from "./Question"
import QuestionForm from "./QuestionForm"

const FAQList = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const toggleQuestionSelect = (id) => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const getQuestions = async () => {
    try {
      const response = await fetch("/api/v1/questions")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const questionData = await response.json()
      setQuestions(questionData.questions)
      // console.log(`Body: ${questionData}`)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  const postQuestion = async (formPayload) => {
    // debugger
    try {
      const response = await fetch("/api/v1/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: formPayload }),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      // debugger
      setQuestions([...questions, body.newQuestion])
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const questionListItems = questions.map((question) => {
    // console.log(`questionListItems: ${question}`)
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }

    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <QuestionForm postQuestion={postQuestion} />
      <div className="question-list">{questionListItems}</div>
    </div>
  )
}

export default FAQList
