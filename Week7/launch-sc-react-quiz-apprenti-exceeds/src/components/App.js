import React, { useState } from "react";
import QuestionList from "./QuestionList";

const App = (props) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState();

  return (
    <div className="grid-container app">
      <h1 className="title">React Quiz</h1>
      <div className="text-center">
        <QuestionList
          data={props.data.questions}
          setSelectedQuestionId={setSelectedQuestionId}
        />
      </div>
    </div>
  );
};

export default App;
