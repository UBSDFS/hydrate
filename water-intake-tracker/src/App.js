import "./App.css";

import Header from "./components/Header/Header";
import ProgressCard from "./components/Progress/ProgressCard";
import WaterInputCard from "./components/WaterInput/WaterInputCard";

import WeeklyChartCard from "./components/Chart/ChartCard";


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