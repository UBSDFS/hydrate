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
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
                    >
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#475569",
                                fontSize: 14,
                                fontWeight: 600
                            }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#475569",
                                fontSize: 13,
                                fontWeight: 500
                            }}
                        />


                        <Tooltip />

                        <Bar
                            dataKey="water"
                            fill="#38bdf8"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default ChartCard;