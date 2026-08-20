import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("restores today's intake from local storage", () => {
  const today = new Date();
  const dateKey = [today.getFullYear(), today.getMonth() + 1, today.getDate()]
    .map((part, index) => (index === 0 ? part : String(part).padStart(2, "0")))
    .join("-");
  localStorage.setItem("waterIntakeHistory", JSON.stringify({ [dateKey]: 750 }));

  render(<App />);

  expect(screen.getByText("750 / 2000 ml")).toBeInTheDocument();
});

test("saves a new intake amount by date", () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/enter amount/i), {
    target: { value: "500" }
  });
  fireEvent.click(screen.getByRole("button", { name: /add water/i }));

  const today = new Date();
  const dateKey = [today.getFullYear(), today.getMonth() + 1, today.getDate()]
    .map((part, index) => (index === 0 ? part : String(part).padStart(2, "0")))
    .join("-");

  expect(JSON.parse(localStorage.getItem("waterIntakeHistory"))).toEqual({
    [dateKey]: 500
  });
});
