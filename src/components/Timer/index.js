import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ButtonPlayPause from "../ButtonPlayPause";
import { Container } from "./style";
import { LoginContext } from "../../providers/login";
import { ProjectTaks } from "../../providers/project-tasks";
import { FlightTakeoffSharp } from "@material-ui/icons";

const Timer = ({ play_timer, initial_time, count_time, task }) => {
  const [play, setPlay] = useState(play_timer);
  const [initialTime, setInitialTime] = useState(initial_time);
  const [countTime, setCountTime] = useState(count_time);
  const [timer, setTimer] = useState(count_time);

  const { token } = useContext(LoginContext);

  const setPlayTime = () => {
    let data = task;
    data.timer.initial_time = new Date();
    data.timer.play = true;

    axios
      .patch(
        `https://dev-space-json-server.herokuapp.com/tasks/${task.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setPauseTime = (diff) => {
    let data = task;

    data.timer.initial_time = "";
    data.timer.play = false;
    data.timer.count_time = data.timer.count_time + diff;

    axios
      .patch(
        `https://dev-space-json-server.herokuapp.com/tasks/${task.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(task);

  useEffect(() => {
    setTimer(task.timer.count);
    if (play) {
      playTimer();
    }

    return () => {
      pauseTimer();
    };
  }, [play]);

  const handlePlay = () => {
    setPlay(true);
    setInitialTime(new Date());
    playTimer();
    setPlayTime();
  };

  const handlePause = () => {
    setPlay(false);
    const finishTime = new Date();
    const diff = Math.abs(
      finishTime.getTime() - task.timer.initial_time.getTime()
    );
    setPauseTime(diff);
    pauseTimer();
  };

  let intervalTimer;

  const playTimer = () => {
    setTimer(task.timer.count_time);
    intervalTimer = setInterval(() => {
      setTimer((timer) => timer + 1000);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalTimer);
  };

  return (
    <Container>
      <p>
        {parseInt((timer / (1000 * 60 * 60)) % 60) < 10
          ? `0${parseInt((timer / (1000 * 60 * 60)) % 60)}`
          : parseInt((timer / (1000 * 60 * 60)) % 60)}{" "}
        :{" "}
        {parseInt((timer / (1000 * 60)) % 60) < 10
          ? `0${parseInt((timer / (1000 * 60)) % 60)}`
          : parseInt((timer / (1000 * 60)) % 60)}{" "}
        :{" "}
        {parseInt((timer / 1000) % 60) < 10
          ? `0${parseInt((timer / 1000) % 60)} `
          : parseInt((timer / 1000) % 60)}
      </p>

      <ButtonPlayPause onClick={play ? handlePause : handlePlay} play={play} />
    </Container>
  );
};

export default Timer;
