import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DailyCharts from "./Daily_Charts";
import { Link } from "react-router-dom";

const CurrentWeather = () => {
  //const dispatch = useDispatch();

  const currentWeather = useSelector(
    (state) => state.currentWeather.dailyWeather
  );
  const userData = useSelector((state) => state.userData);

  const conditionsMet =
    currentWeather[0].temperature < parseInt(userData.temp) &&
    currentWeather[0].humidity < parseInt(userData.humidity);

  const dataLoaded = useSelector((state) => state.hourlyWeather.dataLoaded);

  if (dataLoaded === true) {
    return (
      <div className="currentWeather text-center">
        <h3>Current Weather Conditions</h3>
        <h6>
          {currentWeather[0].date} at {currentWeather[0].time}
        </h6>
        <div class="table-div">
          <table className="table table-striped table-responsive table-secondary">
            <tbody>
              <tr>
                <td>Temperature</td>
                <td> {currentWeather[0].temperature} °F</td>
                <td>
                  {currentWeather[0].temperature < parseInt(userData.temp) ? (
                    <div>Met</div>
                  ) : (
                    <div>Not Met</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td> {currentWeather[0].humidity} %</td>
                <td>
                  {currentWeather[0].humidity < parseInt(userData.humidity) ? (
                    <div>Met</div>
                  ) : (
                    <div>Not Met</div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Condition</td>
                <td> {currentWeather[0].conditions}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        {conditionsMet ? (
          <div>
            <h4>It's the Perfect time to Run! Get your sweat on!</h4>
          </div>
        ) : (
          <div>
            <h4>
              It's NOT the perfect time to Run. Would a time later today work
              for you?
            </h4>
          </div>
        )}

        <DailyCharts />

        <button className="btn btn-primary col-auto back-button">
          <Link to="/" className="back-link">
            Back
          </Link>
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CurrentWeather;
