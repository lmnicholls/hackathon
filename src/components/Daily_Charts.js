import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import WorkoutVideo from "./Workout_Video";

const DailyCharts = () => {
  const hourlyWeather = useSelector(
    (state) => state.hourlyWeather.hourlyWeather
  );

  const userData = useSelector((state) => state.userData);
  const dataLoaded = useSelector((state) => state.hourlyWeather.dataLoaded);

  if (dataLoaded === false) {
    return <div></div>;
  } else {
    const dailyDataPoints =
      [...hourlyWeather][0].date.filter(
        (v) => v === [...hourlyWeather][0].date[0]
      ).length + 1;

    const time = [...hourlyWeather[0].time].splice(0, dailyDataPoints);
    const conditions = [...hourlyWeather[0].conditions].splice(
      0,
      dailyDataPoints
    );
    const userMaxTemp = Array(dailyDataPoints).fill(parseInt(userData.temp));
    const userMaxHumidity = Array(dailyDataPoints).fill(
      parseInt(userData.humidity)
    );

    const tempPointColors = [...hourlyWeather][0].temperature
      .slice(0, dailyDataPoints)
      .map((dataPoint) => {
        if (dataPoint > userData.temp) {
          return "rgb(235, 64, 52)";
        } else return "rgb(125, 209, 142)";
      });

    const humidityPointColors = [...hourlyWeather][0].humidity
      .slice(0, dailyDataPoints)
      .map((dataPoint) => {
        if (dataPoint > userData.humidity) {
          return "rgb(235, 64, 52)";
        } else return "rgb(125, 209, 142)";
      });

    const tempData = {
      labels: [...hourlyWeather][0].time.slice(0, dailyDataPoints),
      datasets: [
        {
          label: "Today's Temperature (°F)",
          data: [...hourlyWeather][0].temperature.slice(0, dailyDataPoints),
          fill: false,
          backgroundColor: "rgb(92, 145, 173)",
          borderColor: "rgba(92, 145, 173, 0.2)",
          pointBackgroundColor: tempPointColors,
        },
        {
          label: "Max Temperature(%)",
          data: userMaxTemp,
          fill: true,
          backgroundColor: "rgba(86, 156, 93, 0.25)",
          borderColor: "rgba(86, 156, 93, 0.2)",
        },
      ],
    };

    const tempOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    const humidityData = {
      labels: [...hourlyWeather][0].time.slice(0, dailyDataPoints),
      datasets: [
        {
          label: "Today's Humidity (%)",
          data: [...hourlyWeather][0].humidity.slice(0, dailyDataPoints),
          fill: false,
          backgroundColor: "rgb(92, 145, 173)",
          borderColor: "rgba(92, 145, 173, 0.2)",
          pointBackgroundColor: humidityPointColors,
        },
        {
          label: "Max Humidity (%)",
          // hardcoded user data - need to fix!!
          data: userMaxHumidity,
          fill: true,
          backgroundColor: "rgba(86, 156, 93, 0.25)",
          borderColor: "rgba(86, 156, 93, 0.2)",
        },
      ],
    };

    const humidityOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return (
      <div className="dailyConditions text-center">
        <h3>The Day's Conditions</h3>
        <div className="graphs d-flex justify-content-center">
          <div className="temperatureGraph">
            <h5>Temperature (°F)</h5>
            <Line
              data={tempData}
              options={{
                tempOptions,
                responsive: true,
                maintainAspectRatio: true,
              }}
            />
          </div>
          <div className="humidityGraph">
            <h5>Humidity (%)</h5>
            <Line
              data={humidityData}
              options={{
                humidityOptions,
                responsive: true,
                maintainAspectRatio: true,
              }}
            />
          </div>
        </div>
        <div className="conditions d-flex justify-content-center">
          <div>
            <h5>Conditions</h5>
            <table className="table table-striped table-responsive table-primary">
              <tbody>
                <tr>
                  {time.map((t) => (
                    <td>{t}</td>
                  ))}
                </tr>
                <tr>
                  {conditions.map((c) => (
                    <td>{c}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <WorkoutVideo />
      </div>
    );
  }
};

export default DailyCharts;
