import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorkoutVideo } from "../actions";

const WorkoutVideo = () => {
  const currentWeather = useSelector(
    (state) => state.currentWeather.dailyWeather
  );
  const userData = useSelector((state) => state.userData);
  const dataLoaded = useSelector((state) => state.currentWeather.dataLoaded);
  const videoId = useSelector((state) => state.workoutVideo.videoId);

  const conditionsMet =
    currentWeather[0].temperature < parseInt(userData.temp) &&
    currentWeather[0].humidity < parseInt(userData.humidity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkoutVideo());
  }, {});

  if (dataLoaded) {
    // const idealTemp = currentWeather[0].temperature < parseInt(userData.temp);
    // const idealHumidity =
    //   currentWeather[0].humidity < parseInt(userData.humidity);

    if (!conditionsMet) {
      dispatch(getWorkoutVideo());

      return (
        <div class="video">
          <h4>Would you like to do a workout video instead?</h4>
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
  }
  return null;
};

export default WorkoutVideo;
