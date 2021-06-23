import React from "react";
import { useSelector } from "react-redux";
import { Line, Pie } from "react-chartjs-2";

const DailyCharts = () => {
  const hourlyWeather = useSelector(
    (state) => state.hourlyWeather.hourlyWeather
  );
  const dataLoaded = useSelector((state) => state.hourlyWeather.dataLoaded);

  if (dataLoaded === false) {
    return (
      <div>
        <h1>Let's See If You Should Run Today?</h1>
      </div>
    );
  } else {
    const dailyDataPoints = [...hourlyWeather][0].date.filter(
      (v) => v === [...hourlyWeather][0].date[0]
    ).length;
    console.log("1", hourlyWeather);
    const time = [...hourlyWeather[0].time].splice(0, dailyDataPoints);
    const conditions = [...hourlyWeather[0].conditions].splice(
      0,
      dailyDataPoints
    );

    console.log("2", hourlyWeather);

    const tempData = {
      labels: [...hourlyWeather][0].time.slice(0, dailyDataPoints),
      datasets: [
        {
          label: "Today's Temperature (°F)",
          data: [...hourlyWeather][0].temperature.slice(0, dailyDataPoints),
          fill: false,
          backgroundColor: "rgb(92, 145, 173)",
          borderColor: "rgba(92, 145, 173, 0.2)",
        },
        {
          label: "Max Temperature(%)",
          // hardcoded user data - need to fix!!
          data: [76, 76, 76, 76, 76, 76, 76, 76, 76],
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
        },
        {
          label: "Max Humidity (%)",
          // hardcoded user data - need to fix!!
          data: [76, 76, 76, 76, 76, 76, 76, 76, 76],
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
        <h1>The Day's Conditions</h1>
        <div className="graphs d-flex justify-content-center">
          <div className="temperatureGraph">
            <h5>Temperature</h5>
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
            <h5>Humidity</h5>
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
      </div>
    );
  }
};

export default DailyCharts;
