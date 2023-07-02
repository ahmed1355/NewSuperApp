import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import up from "./assets/Vector.jpg";
import down from "./assets/Vector_down (1).svg";
import styles from "./time.module.css";
import audioFile from "./assets/file_example_MP3_1MG.mp3";
const Timer = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [playing, setPlaying] = useState(false);

  const increaseTime = (unit) => {
    if (time[unit] === 59) {
      return;
    }
    setTime((prevTime) => ({
      ...prevTime,
      [unit]: prevTime[unit] + 1,
    }));
  };

  const decreaseTime = (unit) => {
    if (time[unit] === 0) {
      return;
    }
    setTime((prevTime) => ({
      ...prevTime,
      [unit]: prevTime[unit] - 1,
    }));
  };

  const toHoursAndMinutes = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleTimerEnd = () => {
    const audio = new Audio(audioFile);
    audio.play();

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 4000);
  };
  const { hours, minutes, seconds } = time;
  const totalSeconds = seconds + minutes * 60 + hours * 60 * 60;

  return (
    <div className={styles.timerContainer}>
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={totalSeconds}
          colors={["#FF6A6A"]}
          onComplete={handleTimerEnd}
        >
          {({ remainingTime }) => (
            <span className={styles.timerText}>
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>

      <div className={styles.timewrapper}>
        <div className={styles.timerControls}>
          <div className={styles.timerUnit}>
            <p className={styles.timerLabel}>Hours</p>
            <img
              className={styles.timerButton}
              id={styles.incr}
              onClick={() => increaseTime("hours")}
              src={up}
            />
            <p className={styles.timerValue}>{hours}</p>
            <img
              className={styles.timerButton}
              onClick={() => decreaseTime("hours")}
              src={down}
            />
          </div>
          <div className={styles.timerUnit}>
            <p className={styles.timerLabel}>Minutes</p>
            <img
              className={styles.timerButton}
              id={styles.incr}
              onClick={() => increaseTime("minutes")}
              src={up}
            />
            <p className={styles.timerValue}>{minutes}</p>
            <img
              className={styles.timerButton}
              onClick={() => decreaseTime("minutes")}
              src={down}
            />
          </div>
          <div className={styles.timerUnit}>
            <p className={styles.timerLabel}>Seconds</p>
            <img
              className={styles.timerButton}
              id={styles.incr}
              onClick={() => increaseTime("seconds")}
              src={up}
            />
            <p className={styles.timerValue}>{seconds}</p>
            <img
              className={styles.timerButton}
              onClick={() => decreaseTime("seconds")}
              src={down}
            />
          </div>
        </div>
      </div>

      <div
        onClick={() => setPlaying((prevPlaying) => !prevPlaying)}
        className={styles.timerStartBtn}
      >
        <p>{playing ? "Pause" : "Start"}</p>
      </div>
    </div>
  );
};

export default Timer;
