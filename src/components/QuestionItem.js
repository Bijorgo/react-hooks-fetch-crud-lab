import React from "react";

function QuestionItem({ question, onDeleteItem }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDeleteClick(item) {
    // delete from database and form
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then( () => onDeleteItem(question.id))
    .catch(error => console.error(error));
  };

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button className="remove" onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
