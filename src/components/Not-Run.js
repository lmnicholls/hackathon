import React from "react";
import CurrentWeather from "./Current_Weather";
import DailyCharts from "./Daily_Charts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDefaultRun } from "../actions";

const NotRun = () => {
  const dispatch = useDispatch();

  const handleBackButton = () => {
    dispatch(setDefaultRun());
  };

  return (
    <div>
      <h1>It's NOT the perfect time to Run. Try this instead...</h1>
      <CurrentWeather />
      <DailyCharts />
      <button
        className="btn btn-primary col-auto back-button"
        onClick={handleBackButton}
      >
        <Link to="/" className="back-link">
          Back
        </Link>
      </button>
    </div>
  );
};

export default NotRun;
