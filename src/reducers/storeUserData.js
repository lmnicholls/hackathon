import { STORE_USER_DATA } from "../actions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const DEFAULT_STATE = {
  temp: null,
  humidity: null,
};

const StoreUserData = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        temp: action.data.temp,
        humidity: action.data.humidity,
      };
    default:
      return state;
  }
};

export default StoreUserData;
