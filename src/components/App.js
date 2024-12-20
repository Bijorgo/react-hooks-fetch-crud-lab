import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([{id: 0, prompt:"", answers:[]}])
  
  function handleDeleteItem(item) {
    const updatedQuestions = questions.filter((question) => question.id !== item)
    setQuestions(updatedQuestions)
  }

  useEffect( () => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(questionData => {
      //do something with data
      setQuestions(questionData)
    })
    .catch(error => console.error(error))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} setQuestions={setQuestions}/> : <QuestionList questions={questions} setQuestions={setQuestions} onDeleteItem={handleDeleteItem}/>}
    </main>
  );
}

export default App;
