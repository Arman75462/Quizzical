import "/src/styles/UtilityButton.css";

function UtilityButton({ text, padding, onClick }) {
  return (
    <button
      className="UtilityButton"
      style={{ padding: padding }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default UtilityButton;
