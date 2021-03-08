import React, { useState } from "react";
import QuestionList from "./QuestionList";

const App = (props) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState();
  let tagline;
  if (selectedQuestionId === props.data.question.correctAnswerId) {
    tagline = <div className="correct">Correct!</div>;
  } else if (
    selectedQuestionId === props.data.question.correctAnswerId ||
    selectedQuestionId
  ) {
    tagline = <div className="incorrect">Incorrect</div>;
  }

  return (
    <div className="grid-container app">
      <h1 className="title">React Quiz</h1>
      <div className="text-center">
        <QuestionList
          data={props.data.question}
          setSelectedQuestionId={setSelectedQuestionId}
        />
        {tagline}
      </div>
    </div>
  );
};

export default App;
