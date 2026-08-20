import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ProgressCard from "./components/Progress/ProgressCard";
import WaterInputCard from "./components/WaterInput/WaterInputCard";

import ChartCard from "./components/Chart/ChartCard";

const STORAGE_KEY = "waterIntakeHistory";

const getDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getStoredHistory = () => {
  try {
    const storedHistory = JSON.parse(localStorage.getItem(STORAGE_KEY));

    return storedHistory && typeof storedHistory === "object" ? storedHistory : {};
  } catch {
    return {};
  }
};

const getWeeklyData = (dailyIntake) =>
  Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));

    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      water: dailyIntake[getDateKey(date)] || 0
    };
  });

function App() {
  const [dailyIntake, setDailyIntake] = useState(getStoredHistory);
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState(""); // was 0 — caused the "0100" typing bug
  const goalAmount = 2000; // Example goal amount in ml
  const todayKey = getDateKey();

  const currentAmount = dailyIntake[todayKey] || 0;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dailyIntake));
  }, [dailyIntake]);

  //Handlers
const handleAddWater = () => {
  const amount = Number(inputValue);

  if (amount > 0) {
    setHistory((prevHistory) => [...prevHistory, amount]);
    setDailyIntake((prevIntake) => ({
      ...prevIntake,
      [todayKey]: (prevIntake[todayKey] || 0) + amount
    }));
  }
};

  const handleUndoLastEntry = () => {
  if (history.length > 0) {
    const lastEntry = history[history.length - 1];

    setHistory((prevHistory) => prevHistory.slice(0, -1));
    setDailyIntake((prevIntake) => ({
      ...prevIntake,
      [todayKey]: Math.max(0, (prevIntake[todayKey] || 0) - lastEntry)
    }));
  }
};
const handleReset = () => {
  setHistory([]);
  setInputValue("");
  setDailyIntake((prevIntake) => ({
    ...prevIntake,
    [todayKey]: 0
  }));
};

const weeklyData = getWeeklyData(dailyIntake);
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
