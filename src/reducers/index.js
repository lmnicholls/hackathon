import { combineReducers } from "redux";
import CurrentWeatherReducer from "./currentWeather";
import HourlyWeatherReducer from "./hourlyWeather";
import StoreUserData from "./storeUserData";
import runReducer from "./runReducer";

const rootReducer = combineReducers({
  currentWeather: CurrentWeatherReducer,
  hourlyWeather: HourlyWeatherReducer,
  userData: StoreUserData,
});

export default rootReducer;
