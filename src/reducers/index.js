import { combineReducers } from "redux";
import CurrentWeatherReducer from "./currentWeather";
import HourlyWeatherReducer from "./hourlyWeather";
import StoreUserData from "./storeUserData";
import WorkoutVideoReducer from "./workoutVideo";
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
  currentWeather: CurrentWeatherReducer,
  hourlyWeather: HourlyWeatherReducer,
  userData: StoreUserData,
  workoutVideo: WorkoutVideoReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
