import { combineReducers } from "redux";
import CurrentWeatherReducer from "./currentWeather";
import HourlyWeatherReducer from "./hourlyWeather";
import StoreUserData from "./storeUserData";
import WorkoutVideoReducer from "./workoutVideo";

const rootReducer = combineReducers({
  currentWeather: CurrentWeatherReducer,
  hourlyWeather: HourlyWeatherReducer,
  userData: StoreUserData,
  workoutVideo: WorkoutVideoReducer,
});

export default rootReducer;
