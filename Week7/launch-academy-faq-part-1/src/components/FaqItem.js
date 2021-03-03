import React from "react";

const FaqItem = (props) => {
  let fQuestion = props.question;
  let fAnswer = props.answer;
  let faqText = "";
  if (props.faqSelected === true) {
    faqText = fAnswer;
  }

  return (
    <div>
      <div className="grid-x" onClick={props.selectFaqFunction}>
        <div className="cell-large-1">
          <span>+ </span>
        </div>
        <div className="cell auto">
          <span>{fQuestion}</span>
        </div>
      </div>
      <div className="faq-text">
        <p>{faqText}</p>
      </div>
    </div>
  );
};

export default FaqItem;
