import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

const DailyCharts = () => {
  const hourlyWeather = useSelector(
    (state) => state.hourlyWeather.hourlyWeather
  );
  console.log(hourlyWeather.length);

  if (hourlyWeather.length === 0) {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  } else {
    const data = {
      labels: hourlyWeather[0].time,
      datasets: [
        {
          label: "Hourly Temperature (°F)",
          data: hourlyWeather[0].temperature,
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
          data={data}
          options={{ options, responsive: true, maintainAspectRatio: true }}
        />
      </div>
    );
  }
};

export default DailyCharts;
