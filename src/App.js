import "./App.css";
import React from "react";
import { getLocation } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
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
  const dispatch = useDispatch();

  const findByGeolocation = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        dispatch(getLocation(latitude, longitude));
      });
    } else {
      alert("Sorry, your location was not found.");
    }
  };

  const { idealTime, notIdealTime } = useSelector((state) => state.run);
  const { dataLoaded } = useSelector((state) => state.currentWeather);

  return (
    <div className="App">
      <button
        className="btn btn-primary col-auto location"
        type="submit"
        onClick={(e) => findByGeolocation(e)}
      >
        Find Me
      </button>
      <Switch>
        <Route exact path="/">
          {dataLoaded && <Form />}
        </Route>

        <Route path="/run">
          {idealTime ? <Run /> : ""}
          <CurrentWeather />
          <DailyCharts />
        </Route>

        <Route path="/not-run">
          {notIdealTime ? <NotRun /> : ""}
          <CurrentWeather />
          <DailyCharts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
