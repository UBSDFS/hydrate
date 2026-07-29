function ProgressCard() {
    return (
        <section className="card">
            <p className="card-label">Daily Progress</p>

            <div className="progress-heading">
                <h2>Current Intake</h2>
                <span>Percentage</span>
            </div>

            <p className="goal-text">Daily Goal</p>

            <div className="progress-track">
                <div className="progress-fill"></div>
            </div>

            <p className="progress-message">Progress Message</p>
        </section>
    );
}

export default ProgressCard;