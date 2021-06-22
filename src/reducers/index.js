import { combineReducers } from "redux";
import CurrentWeatherReducer from "./currentWeather";

const rootReducer = combineReducers({
  currentWeather: CurrentWeatherReducer,
});

export default rootReducer;
