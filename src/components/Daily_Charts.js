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
    const dailyDataPoints = hourlyWeather[0].date.filter(
      (v) => v === hourlyWeather[0].date[0]
    ).length;

    const conditions = hourlyWeather[0].conditions
      .slice(0, dailyDataPoints)
      .reduce((obj, condition) => {
        obj[condition] = (obj[condition] || 0) + 1;
        return obj;
      }, {});
    console.log(Object.keys(conditions));
    console.log(Object.values(conditions));

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

    const conditionsData = {
      labels: Object.keys(conditions),
      datasets: [
        {
          label: "Today's Conditions",
          data: Object.values(conditions),
          fill: false,
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          borderColor: ["rgb(255, 99, 32)", "rgb(54, 162, 35)"],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className="dailyConditions">
        <h1>The Day's Conditions</h1>
        <div className="graphs">
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
          <div className="conditionGraph">
            <h5>Conditions</h5>
            <Pie data={conditionsData} />
          </div>
        </div>
      </div>
    );
  }
};

export default DailyCharts;
