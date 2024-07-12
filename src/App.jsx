import { useState } from "react";
import "./App.css";
import QuizQuestionnairePage from "/src/pages/QuizQuestionnairePage.jsx";
import QuizStartPage from "/src/pages/QuizStartPage.jsx";

function App() {
  const [isQuizStart, setIsQuizStart] = useState(true);

  return (
    <div className="App">
      {isQuizStart ? <QuizQuestionnairePage /> : <QuizStartPage />}
    </div>
  );
}

export default App;
