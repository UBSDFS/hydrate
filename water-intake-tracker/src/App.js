import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ProgressCard from "./components/Progress/ProgressCard";
import WaterInputCard from "./components/WaterInput/WaterInputCard";

import WeeklyChartCard from "./components/Chart/ChartCard";


function App() {
  const [goalAmount] = useState(2000); // static for now

  // keeps a running log of each logged amount, in order,
  // so the last one can be pulled back off
  const [entries, setEntries] = useState([]);
  const [currentAmount, setCurrentAmount] = useState(500); // matches old hardcoded value

  // removes the most recent entry and subtracts it from the running total
  const handleUndoLastEntry = () => {
    if (entries.length === 0) return;

    const last = entries[entries.length - 1];
    setEntries(entries.slice(0, -1));
    setCurrentAmount((prev) => prev - last);
  };

  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <ProgressCard
          currentAmount={currentAmount}
          goalAmount={goalAmount}
        />
        <WaterInputCard onUndoLastEntry={handleUndoLastEntry} />

        <WeeklyChartCard />
      </div>
    </main>
  );
}

export default App;