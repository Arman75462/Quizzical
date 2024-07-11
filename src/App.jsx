import { useState } from "react";
import "./App.css";
import QuizQuestionnairePage from "/src/pages/QuizQuestionnairePage.jsx";
import QuizStartPage from "/src/pages/QuizStartPage.jsx";

function App() {
  const [isQuizStart, setIsQuizStart] = useState(false);

  return (
    <div className="App">
      {isQuizStart ? <QuizStartPage /> : <QuizQuestionnairePage />}
    </div>
  );
}

export default App;
