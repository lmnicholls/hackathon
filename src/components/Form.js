import React, { useState } from "react";

const Form = () => {
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");

  //weather condition local state?

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-3">
          <h1 className="header">When to run?</h1>
          <form>
            <div className="form-group">
              <label for="temperature" className="label">
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
              <label for="humidity" className="label">
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

            <div className="form-group">
              <label className="label">
                <strong>Weather Conditions:</strong>
              </label>
              <div class="checkbox">
                <label>
                  <input type="checkbox"></input>
                  Sunny
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox"></input>
                  Rain
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox"></input>
                  Cloudy
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox"></input>
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
