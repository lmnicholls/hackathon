import { STORE_USER_DATA } from "../actions";

const DEFAULT_STATE = {
  temp: null,
  humidity: null,
};

const StoreUserData = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        temp: action.payload.temp,
        humidity: action.payload.humidity,
      };
    default:
      return state;
  }
};

export default StoreUserData;
