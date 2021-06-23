import { GET_RUN, GET_NOT_RUN } from "../actions";

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
    default:
      return state;
  }
};

export default runReducer;
