import React from "react";
import Block from "./Block";
import "./Timer.css";
import { timers } from "jquery";


const Timer = ({timeLeft, setTimeLeft, isPaused, setIsPause}) => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft - 60 * minutes);

  return (
    <div className="container">
      <Block param="Minutes" number={minutes}/><h1>: </h1><Block param="Seconds" number={seconds}/>
    </div>
  );
};

export default Timer;
