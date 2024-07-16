import "/src/styles/UtilityButton.css";

function UtilityButton({ text, padding, onClick, className = "" }) {
  return (
    <button
      className={`UtilityButton ${className}`}
      style={{ padding: padding }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default UtilityButton;
