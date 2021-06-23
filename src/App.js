import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
//style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//components
import Form from "./components/Form";
import DailyCharts from "./components/Daily_Charts";
import Run from "./components/Run";
import NotRun from "./components/Not-Run";
import CurrentWeather from "./components/Current_Weather";

function App() {
  const { idealTime, notIdealTime } = useSelector((state) => state.run);
  const { dataLoaded } = useSelector((state) => state.currentWeather);

  return (
    <div className="App">
      <Form />
      {idealTime ? <Run /> : ""}
      {notIdealTime ? <NotRun /> : ""}
      <CurrentWeather />
      <DailyCharts />
    </div>
  );
}

export default App;
