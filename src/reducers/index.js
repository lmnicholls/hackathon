import { combineReducers } from "redux";
import CurrentWeatherReducer from "./currentWeather";
import HourlyWeatherReducer from "./hourlyWeather";
import runReducer from "./runReducer";

const rootReducer = combineReducers({
  currentWeather: CurrentWeatherReducer,
  hourlyWeather: HourlyWeatherReducer,
  run: runReducer,
});

export default rootReducer;
