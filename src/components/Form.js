import React, { useState } from "react";
import { useSelector } from "react-redux";
import Run from "./Run";

const Form = () => {
  const [temp, setTemp] = useState("");
  const [humidityLevel, setHumidityLevel] = useState("");
  const [sunny, setSunny] = useState("");
  const [rain, setRain] = useState("");
  const [cloudy, setCloudy] = useState("");
  const [snow, setSnow] = useState("");
  const [idealTime, setIdealTime] = useState(false);

  const { temperature, humidity, conditions } = useSelector(
    (state) => state.currentWeather.dailyWeather[0]
  );

  //event handlers
  const handleFormSubmit = (e) => {
    e.preventDefault();

    //tried parseInt local state and did not match so converting store values to string to meet conditional and compare input values with redux store values
    const humidityString = humidity.toString();
    const tempString = temperature.toString();

    if (temp <= tempString && humidityLevel <= humidityString) {
      setIdealTime(!idealTime);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-3">
          <h1 className="header">When to run?</h1>
          <form>
            <div className="form-group">
              <label className="label">
                <strong>Temperature:</strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter max run temp"
                required
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label className="label">
                <strong>Humidity:</strong>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={humidityLevel}
                onChange={(e) => setHumidityLevel(e.target.value)}
              ></input>
            </div>

            <div className="form-group weather-conditions">
              <label className="label">
                <strong>Weather Conditions:</strong>
              </label>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => setSunny(!sunny)}
                  ></input>
                  Sunny
                </label>
              </div>

              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => setRain(!rain)}
                  ></input>
                  Rain
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => setCloudy(!cloudy)}
                  ></input>
                  Cloudy
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => setSnow(!snow)}
                  ></input>
                  Snow
                </label>
              </div>
            </div>

            <button
              className="btn btn-primary col-auto"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        {idealTime ? <Run /> : ""}
      </div>
    </div>
  );
};

export default Form;
