import React, { useState } from "react";
import FaqItem from "./FaqItem";

const FaqList = (props) => {
  const [selectedFaqID, setSelectedFaqID] = useState(null);
  const faqList = props.faqData.map((faq) => {
    const selectFaqFunction = () => {
      if (faq.id === selectedFaqID) {
        return setSelectedFaqID(null);
      } else {
        return setSelectedFaqID(faq.id);
      }
    };
    let faqSelected = false;
    if (selectedFaqID === faq.id) {
      faqSelected = true;
    }
    return (
      <FaqItem
        key={faq.id}
        question={faq.question}
        answer={faq.answer}
        faqSelected={faqSelected}
        selectFaqFunction={selectFaqFunction}
      />
    );
  });
  return <ul>{faqList}</ul>;
};

export default FaqList;
