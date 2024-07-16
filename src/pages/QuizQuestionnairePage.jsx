import { useState, useEffect } from "react";
import "/src/styles/QuizQuestionnairePage.css";
import UtilityButton from "/src/components/UtilityButton.jsx";

function QuizQuestionnairePage({ setIsQuizStart }) {
  const [dataFromAPI, setDataFromAPI] = useState([]);

  // State to track selected options for each question
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Fetch data from API on component mount
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
        setDataFromAPI(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Determine the CSS class for each option based on selected state and correctness. The CSS class will make the buttons either of selected color (blue), wrong color (red) or correct color (green).
  function whichClassName(question, answer) {
    // Find the correct answer for the current question
    const correctAnswer = dataFromAPI.find(
      (item) => item.question === question
    ).correct_answer;

    if (
      selectedOptions[question] === answer &&
      answer === correctAnswer &&
      isQuizComplete
    ) {
      return "QuizQuestionnairePage__options chosenOptionStyle correctOptionStyle"; // Selected correct answer after quiz completion (green)
    } else if (
      selectedOptions[question] === answer &&
      isQuizComplete &&
      answer !== correctAnswer
    ) {
      return "QuizQuestionnairePage__options chosenOptionStyle wrongOptionStyle"; // Selected incorrect answer after quiz completion (red)
    } else if (selectedOptions[question] === answer) {
      return "QuizQuestionnairePage__options chosenOptionStyle"; // Currently selected answer (blue)
    } else if (isQuizComplete && answer === correctAnswer) {
      return "QuizQuestionnairePage__options correctOptionStyle"; // Correct answer shown after quiz completion (green)
    } else {
      return "QuizQuestionnairePage__options"; // Default style for options
    }
  }

  function handleOptionClick(event, question) {
    // If quiz is completed, don't allow selection
    if (isQuizComplete === false) {
      const selectedOption = event.target.textContent;
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [question]: selectedOption,
      }));
    }
  }

  // Check if all questions have been answered before showing results
  function handleCheckAnswersClick(questionsLength) {
    if (Object.keys(selectedOptions).length < questionsLength) {
      alert("Please answer all questions before checking answers.");
      return;
    } else {
      setIsQuizComplete(true);
    }
  }

  function handlePlayAgainClick() {
    setSelectedOptions({});
    setIsQuizComplete(false);
    setIsQuizStart(false);
  }

  // Calculate number of correct answers
  function calculateScore() {
    let score = 0;
    dataFromAPI.forEach((question) => {
      const correctAnswer = question.correct_answer;
      if (selectedOptions[question.question] === correctAnswer) {
        score++;
      }
    });
    return score;
  }

  return (
    <div className="QuizQuestionnairePage">
      {dataFromAPI.map((result) => (
        <div
          key={result.question}
          className="QuizQuestionnairePage__questions-container"
        >
          <p className="QuizQuestionnairePage__question">{result.question}</p>

          <div className="QuizQuestionnairePage__options-container">
            <button
              onClick={(event) => handleOptionClick(event, result.question)}
              className={whichClassName(result.question, result.correct_answer)}
            >
              {result.correct_answer}
            </button>

            {result.incorrect_answers.map((incorrectAnswer, index) => (
              <button
                key={index}
                onClick={(event) => handleOptionClick(event, result.question)}
                className={whichClassName(result.question, incorrectAnswer)}
              >
                {incorrectAnswer}
              </button>
            ))}
          </div>

          <hr />
        </div>
      ))}

      {
        // Display play again button and score if quiz is completed and user has clicked check answers button
        isQuizComplete ? (
          <div className="QuizQuestionnairePage__playAgain-container">
            <p>
              You scored {calculateScore()}/{dataFromAPI.length} correct answers
            </p>
            <UtilityButton
              text="Play again"
              padding="0.75em 1.5em"
              onClick={handlePlayAgainClick}
            />
          </div>
        ) : (
          <UtilityButton
            text="Check answers"
            padding="0.75em 1.5em"
            onClick={() => handleCheckAnswersClick(dataFromAPI.length)}
            className="QuizQuestionnairePage__checkAnswers"
          />
        )
      }
    </div>
  );
}

export default QuizQuestionnairePage;
