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
  const goalAmount = 2000; // Example goal amount in ml

  const currentAmount = totalWater;

  //Handlers
  const handleAddWater = () => {
    const amount = Number(inputValue);
    if (amount > 0) {
      setTotalWater((prevTotal) => prevTotal + amount);
      setHistory((prevHistory) => [...prevHistory, amount]);
    }
  };

  const handleUndoLastEntry = () => {
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


  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <ProgressCard
          currentAmount={currentAmount}
          goalAmount={goalAmount}
        />
        <WaterInputCard inputValue={inputValue} setInputValue={setInputValue} onUndoLastEntry={handleUndoLastEntry} onAddWater={handleAddWater} onReset={handleReset} />
        <WeeklyChartCard />
      </div>
    </main>
  );
}

export default App;