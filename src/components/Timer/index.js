import { useState, useEffect } from "react";
import ButtonPlayPause from "../ButtonPlayPause";
import { Container } from "./style";

const Timer = ({ play_timer, initial_time, count_time }) => {
  const [play, setPlay] = useState(play_timer);
  const [initialTime, setInitialTime] = useState(initial_time);
  const [countTime, setCountTime] = useState(count_time);
  const [timer, setTimer] = useState(count_time);

  useEffect(() => {
    if (play === true) {
      playTimer();
    }

    return () => {
      pauseTimer();
    };
  }, [play]);

  const handlePlay = () => {
    setPlay(true);
    setInitialTime(new Date());
  };

  const handlePause = () => {
    setPlay(false);
    const finishTime = new Date();
    const diff = Math.abs(finishTime.getTime() - initialTime.getTime());
    setCountTime(countTime + diff);
    setInitialTime("");
    pauseTimer();
  };

  let intervalTimer;

  const playTimer = () => {
    setTimer(countTime);
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
        {parseInt((timer / (1000 * 60 * 60)) % 60)} :{" "}
        {parseInt((timer / (1000 * 60)) % 60)} : {parseInt((timer / 1000) % 60)}
      </p>

      <ButtonPlayPause onClick={play ? handlePause : handlePlay} play={play} />
    </Container>
  );
};

export default Timer;
