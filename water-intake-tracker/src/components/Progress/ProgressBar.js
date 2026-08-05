function ProgressBar({ currentAmount, goalAmount }) {
    const percentage =
        goalAmount > 0
            ? Math.min((currentAmount / goalAmount) * 100, 100)
            : 0;

    return (
        <div className="progress-track">
            <div
                className="progress-fill"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}

export default ProgressBar;