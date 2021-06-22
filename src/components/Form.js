import React, { useState } from "react";

const Form = () => {
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [sunny, setSunny] = useState("");
  const [rain, setRain] = useState("");
  const [cloudy, setCloudy] = useState("");
  const [snow, setSnow] = useState("");

  //event handlers

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
                placeholder="Temperature"
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
                placeholder="humidity"
                value={humidity}
                required
                onChange={(e) => setHumidity(e.target.value)}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
