import "/src/styles/QuizStartPage.css";
import UtilityButton from "/src/components/UtilityButton.jsx";

function QuizStartPage({ setIsQuizStart }) {
  function handleQuizStartClick() {
    setIsQuizStart(true);
  }

  return (
    <div className="QuizStartPage">
      <h1 className="QuizStartPage__title">Quizzical</h1>
      <UtilityButton
        text="Start Quiz"
        padding="1em 3em"
        onClick={handleQuizStartClick}
      />
    </div>
  );
}

export default QuizStartPage;
