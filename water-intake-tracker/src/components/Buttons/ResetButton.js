export default function ResetButton({ onReset }) {
  return (
    <button className="reset-button" type="button" onClick={onReset}>
      Reset Day
    </button>
  );
}