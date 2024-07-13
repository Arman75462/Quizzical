import { useState, useEffect } from "react";
import "/src/styles/QuizQuestionnairePage.css";
import UtilityButton from "/src/components/UtilityButton.jsx";

function QuizQuestionnairePage() {
  const [dataFromAPI, setDataFromAPI] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDataFromAPI(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="QuizQuestionnairePage">
      {dataFromAPI.map((result) => (
        <div
          key={result.question}
          className="QuizQuestionnairePage__questions-container"
        >
          <p className="QuizQuestionnairePage__question">{result.question}</p>

          <div className="QuizQuestionnairePage__answers">
            <button>{result.correct_answer}</button>
            {result.incorrect_answers.map((incorrectAnswer) => (
              <button key={incorrectAnswer}>{incorrectAnswer}</button>
            ))}
          </div>

          <hr />
        </div>
      ))}

      <UtilityButton text="Check answers" padding="0.75em 1.5em" />
    </div>
  );
}

export default QuizQuestionnairePage;
