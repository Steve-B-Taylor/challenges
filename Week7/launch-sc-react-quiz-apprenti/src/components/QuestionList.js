import React, { useState } from "react";
import Questions from "./Questions";

const QuestionList = (props) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState();

  const data = props.data;
  const question = data.body;
  const correctAnswerId = data.correctAnswerId;
  let tagline;

  let selectQuestion;
  const answers = data.answers.map((answer) => {
    let triggerSelected = () => {
      setSelectedQuestionId(answer.id);
    };

    if (selectedQuestionId === answer.id) {
      selectQuestion = "selected";
    } else if (selectedQuestionId !== answer.id) {
      selectQuestion = "";
    }

    if (selectedQuestionId === correctAnswerId) {
      tagline = <div className="correct">Correct!</div>;
    } else if (selectedQuestionId === correctAnswerId || selectedQuestionId) {
      tagline = <div className="incorrect">Incorrect</div>;
    }

    const handleClick = () => {
      setSelectedQuestionId(!selectedQuestionId);
      triggerSelected();
      console.log(selectQuestion);
    };

    return (
      <Questions
        key={answer.id}
        choices={answer.body}
        correctAnswerId={correctAnswerId}
        setSelectedQuestionId={setSelectedQuestionId}
        selectedQuestionId={selectedQuestionId}
        triggerSelected={triggerSelected}
        selectQuestion={selectQuestion}
        handleClick={handleClick}
      />
    );
  });
  return (
    <div key={data.id} className="grid-x">
      <div className="cell question">{question}</div>
      <div className="cell">{answers}</div>
      {tagline}
    </div>
  );
};

export default QuestionList;
