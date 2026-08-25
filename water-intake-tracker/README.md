# Water Intake Tracker

A simple React dashboard for logging daily water intake and keeping an eye on the last seven days.

## Features

- Track progress toward a 2,000 ml daily water goal.
- Add water amounts in milliliters.
- Undo the most recent entry from the current session.
- Reset today's total.
- View a seven-day intake chart.
- Persist daily totals in the browser's `localStorage`.

## Tech Stack

- React 19
- Create React App
- Recharts
- CSS

## Getting Started

### Prerequisites

- Node.js and npm

### Install

From the `water-intake-tracker` directory, install the dependencies:

```bash
npm install
```

### Run locally

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The app reloads automatically when source files change.

## Available Scripts

| Command         | Description                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| `npm start`     | Runs the app in development mode.                                                 |
| `npm test`      | Runs the test suite in watch mode.                                                |
| `npm run build` | Creates an optimized production build in `build/`.                                |
| `npm run eject` | Copies the Create React App configuration into the project. This is irreversible. |

## Project Structure

```text
src/
  components/
    Buttons/      Intake actions
    Chart/        Seven-day intake chart
    Header/       App header and date display
    Progress/     Daily goal progress
    WaterInput/   Water amount entry
  App.jsx         Application state and layout
  App.css         App styles
```

## Data Storage

Daily totals are stored locally in the browser under the `waterIntakeHistory` key. No account or server is required, and data is specific to the browser profile being used.
