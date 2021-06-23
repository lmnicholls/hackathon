import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { getRun, getNotRun, getLocation } from "../actions";
import { Link } from "react-router-dom";
=======
import { getRun, getNotRun, getLocation, storeUserData } from "../actions";
>>>>>>> c0ac988a5dea7284fc1b6cbfd0d01d8f89b89184

const Form = () => {
  const [temp, setTemp] = useState("");
  const [humidityLevel, setHumidityLevel] = useState("");
  // const [sunny, setSunny] = useState(false);
  // const [rain, setRain] = useState(false);
  // const [cloudy, setCloudy] = useState(false);
  // const [snow, setSnow] = useState(false);
  // const [weatherConditions, setWeatherConditions] = useState([]);

  const { temperature, humidity, conditions } = useSelector(
    (state) => state.currentWeather.dailyWeather[0]
  );

  const dispatch = useDispatch();

  //event handlers

  const handleFormSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD

    console.log(temp);
    console.log(humidityLevel);
    const tempNum = parseInt(temp);
    const humidityNum = parseInt(humidityLevel);
=======
    dispatch(storeUserData(temp, humidityLevel));
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
>>>>>>> c0ac988a5dea7284fc1b6cbfd0d01d8f89b89184

    if (tempNum <= temperature && humidityNum <= humidity) {
      dispatch(getRun());
    } else {
      dispatch(getNotRun());
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-3">
          <h1 className="header">Weather Preferences</h1>
          <form>
            <div className="form-group">
              <label className="label">
                <strong>Temperature:</strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter max run temp F"
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
                type="text"
                className="form-control"
                value={humidityLevel}
                placeholder="max % humidity"
                onChange={(e) => setHumidityLevel(e.target.value)}
              ></input>
            </div>

            {/* <div className="form-group weather-conditions">
              <label className="label">
                <strong>Weather Conditions:</strong>
              </label>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setSunny(!sunny);
                    }}
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
            </div> */}

            <button
              className="btn btn-primary col-auto location"
              type="submit"
              onClick={(e) => handleFormSubmit(e)}
            >
              <Link
                to="/run"
                className="submit-link"
                style={{ textDecoration: "none" }}
              >
                Submit
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
