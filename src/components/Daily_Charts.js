import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

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
    const dailyDataPoints = hourlyWeather[0].date.filter(
      (v) => v === hourlyWeather[0].date[0]
    ).length;

    const tempData = {
      labels: hourlyWeather[0].time.slice(0, dailyDataPoints),
      datasets: [
        {
          label: "Today's Temperature (°F)",
          data: hourlyWeather[0].temperature.slice(0, dailyDataPoints),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          label: "Max Temperature(%)",
          // hardcoded user data - need to fix!!
          data: [76, 76, 76, 76, 76, 76, 76, 76, 76],
          fill: true,
          backgroundColor: "rgba(25, 90, 132, 0.25)",
          borderColor: "rgba(255, 99, 132, 0.2)",
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
      plugins: {
        autocolors: false,
        annotation: {
          annotations: {
            box1: {
              type: "box",
              yMin: 70,
              yMax: 76,
              backgroundColor: "rgba(255, 99, 132, 0.25)",
            },
          },
        },
      },
    };

    const humidityData = {
      labels: hourlyWeather[0].time.slice(0, dailyDataPoints),
      datasets: [
        {
          label: "Today's Humidity (%)",
          data: hourlyWeather[0].humidity.slice(0, dailyDataPoints),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          label: "Max Humidity (%)",
          // hardcoded user data - need to fix!!
          data: [76, 76, 76, 76, 76, 76, 76, 76, 76],
          fill: true,
          backgroundColor: "rgba(25, 90, 132, 0.25)",
          borderColor: "rgba(255, 99, 132, 0.2)",
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
      <div className="line_graph">
        <Line
          data={tempData}
          options={{ tempOptions, responsive: true, maintainAspectRatio: true }}
        />
        <Line
          data={humidityData}
          options={{
            humidityOptions,
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  }
};

export default DailyCharts;
