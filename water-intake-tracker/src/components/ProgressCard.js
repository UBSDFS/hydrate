import ProgressBar from "./ProgressBar";

function ProgressCard({ currentAmount, goalAmount }) {
    const percentage =
        goalAmount > 0
            ? Math.min((currentAmount / goalAmount) * 100, 100)
            : 0;

    return (
        <section className="card progress-card">
            <div className="progress-header">
                <p className="card-label">Daily Progress</p>

                <span>
                    {currentAmount} / {goalAmount} ml
                </span>
            </div>

            <ProgressBar //Progress bar showing the current progress toward the goal
                currentAmount={currentAmount}
                goalAmount={goalAmount}
            />

            <p>{Math.round(percentage)}% complete</p>
        </section>
    );
}

export default ProgressCard;