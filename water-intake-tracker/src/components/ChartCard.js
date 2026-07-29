function ChartCard() {
    return (
        <section className="card chart-card">
            <div className="chart-header">
                <div>
                    <p className="card-label">Weekly Intake</p>
                    <h2>Hydration History</h2>
                </div>

                <span className="chart-range">Last 7 days</span>
            </div>

            <div className="chart-placeholder">
                <div className="placeholder-bars">
                    <span className="bar bar-one"></span>
                    <span className="bar bar-two"></span>
                    <span className="bar bar-three"></span>
                    <span className="bar bar-four"></span>
                    <span className="bar bar-five"></span>
                    <span className="bar bar-six"></span>
                    <span className="bar bar-seven"></span>
                </div>

                <div className="chart-days">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
            </div>
        </section>
    );
}

export default ChartCard;