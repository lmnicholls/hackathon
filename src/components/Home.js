import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { storeUserData, getLocation, updatePreferences } from "../actions";
import CurrentWeather from "./Current_Weather";
import DailyCharts from "./Daily_Charts";
import Header from "./LoadingBar";

const Home = () => {
  const [temp, setTemp] = useState("");
  const [humidityLevel, setHumidityLevel] = useState("");

  let dataLoaded = useSelector((state) => state.currentWeather.dataLoaded);

  const dispatch = useDispatch();

  //event handlers
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(showLoading());
    dispatch(storeUserData(temp, humidityLevel));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        dispatch(getLocation(latitude, longitude));
        dispatch(hideLoading());
      });
    } else {
      alert("Sorry, your location was not found.");
    }
  };

  const handleUpdatePreferences = (e) => {
    e.preventDefault();
    dispatch(updatePreferences());
  };

  return (
    <div className="">
      <Header />
      <h1 className="header">Should I Run Right Now?</h1>
      {!dataLoaded ? (
        <div>
          <div className="row">
            <h5 className="sub-header">
              Enter your ideal running conditions and see if today is a great
              day to run!
            </h5>
          </div>
          <div className="row">
            <div className="col-md-6 offset-3">
              <form className="form">
                <div className="form-group">
                  <label className="label">
                    <strong>Temperature:</strong>
                  </label>
                  <input
                    className="form-control"
                    placeholder="Enter max run temp °F"
                    required
                    type="number"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                    oninvalid="this.setCustomValidity('This is a required field.')"
                    oninput="this.setCustomValidity('')"
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

                <button
                  className="submit-button"
                  type="submit"
                  onClick={(e) => handleFormSubmit(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <button
            className="update-preferences"
            type="submit"
            onClick={(e) => handleUpdatePreferences(e)}
          >
            Update Preferences
          </button>
        </div>
      )}

      {dataLoaded ? (
        <div>
          <div className="row">
            <CurrentWeather />
          </div>
          <div className="row">
            <DailyCharts />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
