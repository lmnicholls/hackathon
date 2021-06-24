import React from "react";
import CurrentWeather from "./Current_Weather";
import DailyCharts from "./Daily_Charts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultRun } from "../actions";

const Run = () => {
  const dispatch = useDispatch();

  const { idealTime, notIdealTime } = useSelector((state) => state.run);

  return (
    <div>
      {idealTime ? (
        <h1>It's the Perfect time to Run! Get your sweat on!</h1>
      ) : (
        ""
      )}
      {notIdealTime ? (
        <h1>It's NOT the perfect time to Run. Try this instead...</h1>
      ) : (
        ""
      )}
      <CurrentWeather />
      <DailyCharts />
      <button className="btn btn-primary col-auto back-button">
        <Link to="/" className="back-link">
          Back
        </Link>
      </button>
    </div>
  );
};

export default Run;
