import "./App.css";
import React from "react";
//style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//components
import Form from "./components/Form";
import DailyCharts from "./components/Daily_Charts";
import CurrentWeather from "./components/Current_Weather";
import WorkoutVideos from "./components/Workout_Videos";

function App() {
  return (
    <div className="Appr">
      <h1 className="header">Should I Run Right Now?</h1>
      <h5 className="header">
        Enter your ideal running conditions and see if today is a great day to
        run!
      </h5>
      <Form />
      <CurrentWeather />
      <DailyCharts />
      <WorkoutVideos />
    </div>
  );
}

export default App;
