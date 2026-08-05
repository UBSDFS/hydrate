import "./App.css";

import Header from "./components/Header";
import ProgressCard from "./components/ProgressCard";
import WaterInputCard from "./components/WaterInputCard";
import ButtonGroup from "./components/ButtonGroup";
import WeeklyChartCard from "./components/ChartCard";
import today from "./components/HeaderDate";

function App() {
  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <ProgressCard
          currentAmount={500} //Hardcoded for now 
          goalAmount={2000}
        />
        <WaterInputCard />

        <WeeklyChartCard />
      </div>
    </main>
  );
}

export default App;