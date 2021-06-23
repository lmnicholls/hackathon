import { GET_RUN, GET_NOT_RUN, SET_DEFAULT_RUN } from "../actions";

const DEFAULT_STATE = {
  idealTime: false,
  notIdealTime: false,
};

const runReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_RUN:
      return {
        ...state,
        idealTime: true,
      };
    case GET_NOT_RUN:
      return {
        ...state,
        notIdealTime: true,
      };
    case SET_DEFAULT_RUN:
      return {
        idealTime: false,
        notIdealTime: false,
      };
    default:
      return state;
  }
};

export default runReducer;
