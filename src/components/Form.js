import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { storeUserData, getLocation } from "../actions";
import { Link } from "react-router-dom";

const Form = () => {
  const [temp, setTemp] = useState("");
  const [humidityLevel, setHumidityLevel] = useState("");
  // const [clear, setClear] = useState(false);
  // const [clouds, setClouds] = useState(false);
  // const [snow, setSnow] = useState(false);
  // const [rain, setRain] = useState(false);
  // const [drizzle, setDrizzle] = useState(false);
  // const [thunderstorm, setTHunderstorm] = useState(false);
  // const [weatherConditions, setWeatherConditions] = useState([]);

  // const { temperature, humidity, conditions } = useSelector(
  //(state) => state.currentWeather.dailyWeather[0]
  //);

  const dispatch = useDispatch();

  //event handlers

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      storeUserData(
        temp,
        humidityLevel
        // clear,
        // clouds,
        // snow,
        // rain,
        // drizzle,
        // thunderstorm
      )
    );

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
    <div className="container-fluid">
      <div className="row">
        <h1 className="header">Should I Run Right Now?</h1>
        <h5 className="header">
          Enter your ideal running conditions and see if today is a great day to
          run!
        </h5>
      </div>
      <div className="row">
        <div className="col-md-6 offset-3">
          <form>
            <div className="form-group">
              <label className="label">
                <strong>Temperature:</strong>
              </label>
              <input
                className="form-control"
                placeholder="Enter max run temp F"
                required
                type="number"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label className="label">
                <strong>Humidity:</strong>
              </label>
              <input
                type="number"
                required
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
                    onChange={() => {
                      setClear(!clear);
                    }}
                  ></input>
                  Clear
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={() => setClouds(!clouds)}
                  ></input>
                  Clouds
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={() => setSnow(!snow)}
                  ></input>
                  Snow
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={() => setRain(!rain)}
                  ></input>
                  Rain
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={() => setDrizzle(!drizzle)}
                  ></input>
                  Drizzle
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    onChange={() => setTHunderstorm(!thunderstorm)}
                  ></input>
                  Thunderstorms
                </label>
              </div>
            </div> */}

            <button
              className="btn btn-primary submit"
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
