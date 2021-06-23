import "./App.css";
import React from "react";
import { getLocation } from "./actions";
import { useDispatch } from "react-redux";
//style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//components
import Form from "./components/Form";
import DailyCharts from "./components/Daily_Charts";

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

  return (
    <div className="App">
      <button
        className="btn btn-primary col-auto location"
        type="submit"
        onClick={(e) => findByGeolocation(e)}
      >
        Find Me
      </button>
      <Form />
      <DailyCharts />
    </div>
  );
}

export default App;
