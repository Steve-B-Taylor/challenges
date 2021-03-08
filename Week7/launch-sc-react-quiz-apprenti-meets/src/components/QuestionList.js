import React from "react";
import Questions from "./Questions";

const QuestionList = (props) => {
  const data = props.data;
  const question = data.body;
  const correctAnswerId = data.correctAnswerId;
  let setSelectedQuestionId = props.setSelectedQuestionId;
  const answers = data.answers.map((answer) => {
    let triggerSelected = () => {
      setSelectedQuestionId(answer.id);
    };
    return (
      <Questions
        key={answer.id}
        choices={answer.body}
        correctAnswerId={correctAnswerId}
        setSelectedQuestionId={setSelectedQuestionId}
        triggerSelected={triggerSelected}
      />
    );
  });
  return (
    <div key={data.id} className="grid-x">
      <div className="cell question">{question}</div>
      <div className="cell">{answers}</div>
    </div>
  );
};

export default QuestionList;
