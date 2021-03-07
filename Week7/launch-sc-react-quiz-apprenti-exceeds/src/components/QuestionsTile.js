import React from "react";
import OptionsTile from "./OptionsTile";

const QuestionsTile = (props) => {
  console.log(props.questionsId);
  const answers = props.answers.map((answer) => {
    const className = " question " + props.selectQuestion;
    return <OptionsTile key={answer.id} options={answer.body} />;
  });

  return (
    <div className="question">
      Question {props.questionsId}: {props.questions}
    </div>
  );
};

export default QuestionsTile;
