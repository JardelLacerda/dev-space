import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ButtonPlayPause from "../ButtonPlayPause";
import { Container } from "./style";
import { LoginContext } from "../../providers/login";

const Timer = ({ play_timer, initial_time, count_time, task }) => {
  const [play, setPlay] = useState(false);
  const [initialTime, setInitialTime] = useState("");
  const [countTime, setCountTime] = useState(0);
  const [timer, setTimer] = useState(0);

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
    const diff = Math.abs(finishTime.getTime() - initialTime.getTime());
    setCountTime(diff);
    setTimer(diff);
    pauseTimer();
    setPauseTime(diff);
  };

  let intervalTimer;

  const playTimer = () => {
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
