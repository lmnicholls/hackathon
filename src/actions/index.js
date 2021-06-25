import axios from "axios";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const YOUTUBE_URL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=workout&type=video&videoEmbeddable=true&key=AIzaSyCbSgQv-AHIhdxOx-h06_jfyHVpwpRY_UA";

export const GET_LOCATION = "GET_LOCATION";
export const STORE_USER_DATA = "STORE_USER_DATA";
export const GET_VIDEO = "GET_VIDEO";
export const UPDATE_PREFERENCES = "EXPORT_PREFERENCES";

export function getLocation(latitude, longitude) {
  const request = axios.get(
    `${ROOT_URL}lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
  );

  return {
    type: GET_LOCATION,
    payload: request,
  };
}

export function storeUserData(temp, humidity) {
  return {
    type: STORE_USER_DATA,
    payload: { temp, humidity },
  };
}

export function getWorkoutVideo() {
  const request = axios.get(YOUTUBE_URL);

  return {
    type: GET_VIDEO,
    payload: request,
  };
}

export function updatePreferences() {
  return {
    type: UPDATE_PREFERENCES,
  };
}
