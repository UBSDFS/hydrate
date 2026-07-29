import "./App.css";

import Header from "./components/Header";
import ProgressCard from "./components/ProgressCard";
import WaterInputCard from "./components/WaterInputCard";
import ButtonGroup from "./components/ButtonGroup";
import WeeklyChartCard from "./components/ChartCard";

function App() {
  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <ProgressCard />
        <WaterInputCard />

        <WeeklyChartCard />
      </div>
    </main>
  );
}

export default App;