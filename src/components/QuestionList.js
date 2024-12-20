import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteItem}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map( (question, index) => (
        <ul key={index}><QuestionItem question={question} onDeleteItem={onDeleteItem} /></ul>
      ))}
    </section>
  );
}

export default QuestionList;
