import React from "react";
import CurrentWeather from "./Current_Weather";
import DailyCharts from "./Daily_Charts";

const NotRun = () => {
  return (
    <div>
      <h1>It's NOT the perfect time to Run. Try this instead...</h1>
      <CurrentWeather />
      <DailyCharts />
    </div>
  );
};

export default NotRun;
