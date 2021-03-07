import React, { useState } from "react";
import QuestionsTile from "./QuestionsTile";

const QuestionList = (props) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState();

  const data = props.data;
  const correctAnswerId = data.correctAnswerId;
  let tagline;

  let selectQuestion;
  const questions = data.map((question) => {
    let triggerSelected = () => {
      setSelectedQuestionId(question.id);
    };

    const handleClick = () => {
      setSelectedQuestionId(!selectedQuestionId);
      triggerSelected();
    };

    return (
      <QuestionsTile
        key={question.id}
        questionsId={question.id}
        questions={question.body}
        answers={question.answers}
        // correctAnswerId={correctAnswerId}
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
      <div className="cell">{questions}</div>
      {/* <div className="cell">{questions.body}</div> */}
      {tagline}
    </div>
  );
};

export default QuestionList;
