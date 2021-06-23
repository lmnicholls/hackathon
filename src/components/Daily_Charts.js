import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

const DailyCharts = () => {
  const hourlyWeather = useSelector(
    (state) => state.hourlyWeather.hourlyWeather
  );

  if (hourlyWeather.length === 0) {
    return (
      <div>
        <h1>Hello World</h1>
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
      ],
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
      ],
    };

    const options = {
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
          options={{ options, responsive: true, maintainAspectRatio: true }}
        />
        <Line
          data={humidityData}
          options={{ options, responsive: true, maintainAspectRatio: true }}
        />
      </div>
    );
  }
};

export default DailyCharts;
