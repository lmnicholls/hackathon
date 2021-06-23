import { GET_LOCATION } from "../actions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const DEFAULT_STATE = {
  dailyWeather: [],
  dataLoaded: false,
};

const CurrentWeatherReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        dailyWeather: [
          {
            id: uuidv4(),
            date: moment
              .utc(
                (action.payload.data.current.dt +
                  action.payload.data.timezone_offset) *
                  1e3
              )
              .format("dddd, MMMM D, YYYY"),
            time: moment
              .utc(
                (action.payload.data.current.dt +
                  action.payload.data.timezone_offset) *
                  1e3
              )
              .format("hh:mm A"),
            temperature: action.payload.data.current.temp,
            humidity: action.payload.data.current.humidity,
            conditions: action.payload.data.current.weather[0].main,
          },
        ],
        dataLoaded: true,
      };
    default:
      return state;
  }
};

export default CurrentWeatherReducer;
