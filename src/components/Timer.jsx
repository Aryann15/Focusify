import React, { useEffect, useRef } from "react";
import Block from "./Block";
import "./Timer.css";
import { timers } from "jquery";

const Timer = ({ timeLeft, setTimeLeft, isPaused, setIsPaused }) => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft - 60 * minutes);

  let intervalRef = useRef();
  useEffect(() => {
    const id = setInterval(() => {
      {
        isPaused
          ? clearInterval(intervalRef.current)
          : setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    intervalRef.current = id;
    return () => clearInterval(intervalRef.current);
  });

  return (
    <>
      <div className="container">
        <Block param="Minutes" number={minutes} />
        <div className="semi">
          <h1>:</h1>
        </div>
        <Block param="Seconds" number={seconds} />
      </div>
      <div class="butt">
        <button
          onClick={() => {
            setTimeLeft(0);
            setIsPaused(true);
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
};

export default Timer;
