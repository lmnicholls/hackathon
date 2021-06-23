import axios from "axios";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const GET_LOCATION = "GET_LOCATION";

export function getLocation(latitude, longitude) {
  const request = axios.get(
    `${ROOT_URL}lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
  );

  return {
    type: GET_LOCATION,
    payload: request,
  };
}

export const GET_RUN = "GET_RUN";

export const getRun = () => {
  return {
    type: GET_RUN,
  };
};
