import { useState, useEffect } from "react";
import "/src/styles/QuizQuestionnairePage.css";

function QuizQuestionnairePage() {
  const [dataFromAPI, setDataFromAPI] = useState();

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return <div className="QuizQuestionnairePage"></div>;
}

export default QuizQuestionnairePage;
