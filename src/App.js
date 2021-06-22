import "./App.css";
import React from "react";
import { getLocation } from "./actions";
import { useDispatch } from "react-redux";

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
      <h1>Hello World</h1>
      <button
        className="btn btn-primary col-auto"
        type="submit"
        onClick={(e) => findByGeolocation(e)}
      >
        Find Me
      </button>
    </div>
  );
}

export default App;
