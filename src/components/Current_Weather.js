import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const currentWeather = useSelector(
    (state) => state.currentWeather.dailyWeather
  );
  const userData = useSelector((state) => state.userData);

  const conditionsMet =
    currentWeather[0].temperature < parseInt(userData.temp) &&
    currentWeather[0].humidity < parseInt(userData.humidity);
  const tempConditionMet =
    currentWeather[0].temperature < parseInt(userData.temp);
  const humidityConditionMet =
    currentWeather[0].humidity < parseInt(userData.humidity);

  const { icon } = useSelector((state) => state.currentWeather.dailyWeather[0]);

  const makeIconURL = () => {
    let iconURL;
    if (dataLoaded) {
      iconURL = `http://openweathermap.org/img/wn/${icon}.png`;
    }
    return iconURL;
  };

  const dataLoaded = useSelector((state) => state.hourlyWeather.dataLoaded);

  if (dataLoaded === true) {
    return (
      <div className="currentWeather text-center">
        <div className="current-weather">
          <h2 className="current-weather-title">Current Weather Conditions</h2>
          <h6>
            {currentWeather[0].date} at {currentWeather[0].time}
          </h6>
          <div className="current-weather-details">
            {tempConditionMet ? (
              <h5 className="text-success">
                {Math.round(currentWeather[0].temperature)} °F
              </h5>
            ) : (
              <h5 className="text-danger">
                {Math.round(currentWeather[0].temperature)} °F
              </h5>
            )}
            {humidityConditionMet ? (
              <h5 className="text-success">{currentWeather[0].humidity}%</h5>
            ) : (
              <h5 className="text-danger">{currentWeather[0].humidity}%</h5>
            )}

            <div className="weather-icon">
              <img src={makeIconURL()} alt="icon"></img>
            </div>
          </div>
        </div>

        {conditionsMet ? (
          <div className="results">
            <h3>
              It's the <span className="success">Perfect</span> time to Run!{" "}
            </h3>
            <p>Get your sweat on!</p>
          </div>
        ) : (
          <div className="results">
            <h3>
              It's <span className="fail">NOT</span> the perfect time to Run.
            </h3>
            <p>
              Would a time later today work for you? Checkout the data below to
              find the perfect time or try a new at home workout!
            </p>
          </div>
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CurrentWeather;
