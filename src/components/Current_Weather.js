import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const currentWeather = useSelector(
    (state) => state.currentWeather.dailyWeather
  );
  console.log(currentWeather);
  const dataLoaded = useSelector((state) => state.hourlyWeather.dataLoaded);

  if (dataLoaded === true) {
    return (
      <div className="currentWeather text-center">
        <h1>Current Weather Conditions</h1>
        <h6>
          {currentWeather[0].date} at {currentWeather[0].time}{" "}
        </h6>
        <div class="table-div">
          <table className="table table-striped table-responsive table-secondary">
            <tbody>
              <tr>
                <td>Temperature</td>
                <td> {currentWeather[0].temperature} °F</td>
                <td>Condition met/not met</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td> {currentWeather[0].humidity} %</td>
                <td>Condition met/not met</td>
              </tr>
              <tr>
                <td>Condition</td>
                <td> {currentWeather[0].conditions}</td>
                <td>Condition met/not met</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default CurrentWeather;
