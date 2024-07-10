import "/src/styles/UtilityButton.css";

function UtilityButton({ text, padding }) {
  return (
    <button className="UtilityButton" style={{ padding: padding }}>
      {text}
    </button>
  );
}

export default UtilityButton;
