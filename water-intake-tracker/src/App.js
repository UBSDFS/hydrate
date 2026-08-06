import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ProgressCard from "./components/Progress/ProgressCard";
import WaterInputCard from "./components/WaterInput/WaterInputCard";

import WeeklyChartCard from "./components/Chart/ChartCard";


function App() {
  const [totalWater, setTotalWater] = useState(0);
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState(0);

  //Handlers
  const handleAddWater = () => {
    const amount = Number(inputValue);
    if (amount > 0) {
      setTotalWater((prevTotal) => prevTotal + amount);
      setHistory((prevHistory) => [...prevHistory, amount]);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastEntry = history[history.length - 1];
      setTotalWater((prevTotal) => prevTotal - lastEntry);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  const handleReset = () => {
    setTotalWater(0);
    setHistory([]);
    setInputValue(0);
  };

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