import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorkoutVideo } from "../actions";

const WorkoutVideo = () => {
  const currentWeather = useSelector(
    (state) => state.currentWeather.dailyWeather
  );
  const userData = useSelector((state) => state.userData);
  const dataLoaded = useSelector((state) => state.currentWeather.dataLoaded);
  const videoId = useSelector((state) => state.workoutVideo);
  console.log(videoId);
  console.log("data", dataLoaded);
  const dispatch = useDispatch();

  if (dataLoaded) {
    const idealTemp = currentWeather[0].temperature < parseInt(userData.temp);
    const idealHumidity =
      currentWeather[0].humidity < parseInt(userData.humidity);
    console.log("temps", idealTemp, idealHumidity);
    if (!idealTemp && !idealHumidity) {
      dispatch(getWorkoutVideo());

      return (
        <div class="video">
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );
    }
  }
  return null;
};

export default WorkoutVideo;
