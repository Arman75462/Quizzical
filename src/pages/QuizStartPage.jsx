import "/src/styles/QuizStartPage.css";
import UtilityButton from "/src/components/UtilityButton.jsx";

function QuizStartPage() {
  return (
    <div className="QuizStartPage">
      <h1 className="QuizStartPage__title">Quizzical</h1>
      <UtilityButton text="Start Quiz" padding="1em 2em" />
    </div>
  );
}

export default QuizStartPage;
