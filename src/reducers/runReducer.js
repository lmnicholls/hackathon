import { GET_RUN } from "../actions";

const DEFAULT_STATE = {
  idealTime: false,
};

const runReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_RUN:
      return true;
    default:
      return state;
  }
};

export default runReducer;
