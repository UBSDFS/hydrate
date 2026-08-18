import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function ChartCard({ data }) {
    return (
        <section className="card chart-card">
            <div className="chart-header">
                <div>
                    <p className="card-label">Weekly Intake</p>
                    <h2>Hydration History</h2>
                </div>

                <span className="chart-range">Last 7 days</span>
            </div>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={data}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="water" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default ChartCard;