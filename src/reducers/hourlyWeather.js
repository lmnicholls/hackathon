import { GET_LOCATION } from "../actions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const DEFAULT_STATE = {
  hourlyWeather: [],
  dataLoaded: false,
};

const HourlyWeatherReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        hourlyWeather: [
          {
            id: uuidv4(),
            date: action.payload.data.hourly.map((hour) => {
              return moment
                .utc((hour.dt + action.payload.data.timezone_offset) * 1e3)
                .format("dddd, MMMM D, YYYY");
            }),
            time: action.payload.data.hourly.map((hour) => {
              return moment
                .utc((hour.dt + action.payload.data.timezone_offset) * 1e3)
                .format("hh:mm A");
            }),
            temperature: action.payload.data.hourly.map((hour) => {
              return hour.temp;
            }),
            humidity: action.payload.data.hourly.map((hour) => {
              return hour.humidity;
            }),
            conditions: action.payload.data.hourly.map((hour) => {
              return hour.weather[0].main;
            }),
          },
        ],
        dataLoaded: true,
      };
    default:
      return state;
  }
};

export default HourlyWeatherReducer;
