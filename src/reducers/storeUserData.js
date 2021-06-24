import { STORE_USER_DATA } from "../actions";

const DEFAULT_STATE = {
  temp: null,
  humidity: null,
  // conditions: {},
};

const StoreUserData = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        temp: action.payload.temp,
        humidity: action.payload.humidity,
        // conditions: {
        //   clouds: action.payload.clouds,
        //   clear: action.payload.clear,
        //   snow: action.payload.snow,
        //   rain: action.payload.rain,
        //   drizzle: action.payload.drizzle,
        //   thunderstorm: action.payload.thunderstorm,
        // },
      };
    default:
      return state;
  }
};

export default StoreUserData;
