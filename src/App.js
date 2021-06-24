import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
//style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//components
import Form from "./components/Form";
//import DailyCharts from "./components/Daily_Charts";
//import Run from "./components/Run";
//import NotRun from "./components/Not-Run";
import CurrentWeather from "./components/Current_Weather";
//import { getLocation } from "./actions";

function App() {
  //const dispatch = useDispatch();

  /*
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        dispatch(getLocation(latitude, longitude));
      });
    } else {
      alert("Sorry, your location was not found.");
    }
  }, []);*/

  //const { idealTime, notIdealTime } = useSelector((state) => state.run);
  //const { dataLoaded } = useSelector((state) => state.currentWeather);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
