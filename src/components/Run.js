import React from "react";
import CurrentWeather from "./Current_Weather";
import DailyCharts from "./Daily_Charts";

const Run = () => {
  return (
    <div>
      <h1>It's the Perfect time to Run! Get your sweat on!</h1>
      <CurrentWeather />
      <DailyCharts />
    </div>
  );
};

export default Run;
