import axios from "axios";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const request = axios.get(
    `${ROOT_URL}q=${city}&units=imperial&appid=${API_KEY}`
  );

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
