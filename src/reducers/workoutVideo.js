import { GET_VIDEO } from "../actions";

const DEFAULT_STATE = {
  videoId: null,
};

const WorkoutVideoReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_VIDEO:
      return {
        videoId:
          action.payload.data.items[
            Math.floor(Math.random() * action.payload.data.items.length)
          ].id.videoId,
      };
    default:
      return state;
  }
};

export default WorkoutVideoReducer;
