import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ProgressCard from "./components/Progress/ProgressCard";
import WaterInputCard from "./components/WaterInput/WaterInputCard";
import WeeklyChartCard from "./components/Chart/ChartCard";
import ChartCard from "./components/Chart/ChartCard";


function App() {
  const [totalWater, setTotalWater] = useState(0);
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState(""); // was 0 — caused the "0100" typing bug
  const goalAmount = 2000; // Example goal amount in ml

  const currentAmount = totalWater;

  //Handlers
const handleAddWater = () => {
  const amount = Number(inputValue);

  if (amount > 0) {
    const today = new Date().getDay();

    setTotalWater((prevTotal) => prevTotal + amount);

    setHistory((prevHistory) => [...prevHistory, amount]);

    setWeeklyData((prevData) =>
      prevData.map((entry, index) =>
        index === today
          ? { ...entry, water: entry.water + amount }
          : entry
      )
    );
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
    setInputValue(""); // was 0
  };

const [weeklyData, setWeeklyData] = useState([
  { day: "Sun", water: 0 },
  { day: "Mon", water: 0 },
  { day: "Tue", water: 0 },
  { day: "Wed", water: 0 },
  { day: "Thu", water: 0 },
  { day: "Fri", water: 0 },
  { day: "Sat", water: 0 }
]);
  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <ProgressCard
          currentAmount={currentAmount}
          goalAmount={goalAmount}
        />
        <WaterInputCard inputValue={inputValue} setInputValue={setInputValue} onUndoLastEntry={handleUndoLastEntry} onAddWater={handleAddWater} onReset={handleReset} />
        <ChartCard data={weeklyData} />
      </div>
    </main>
  );
}

export default App;
