import { combineReducers } from "redux";
import CurrentWeatherReducer from "./currentWeather";
import HourlyWeatherReducer from "./hourlyWeather";

const rootReducer = combineReducers({
  currentWeather: CurrentWeatherReducer,
  hourlyWeather: HourlyWeatherReducer,
});

export default rootReducer;
