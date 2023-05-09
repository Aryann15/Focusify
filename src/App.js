import React, { useState } from "react";

import Form from "./components/Form";
import Timer from "./components/Timer";
import Finished from "./components/Finished";

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  return (
    <>
      <Form setTimeLeft={setTimeLeft} />
      {timeLeft < 0 ? (
        <Finished setTimeLeft={setTimeLeft} setIsPaused={setIsPaused} />
      ) : (
        <Timer
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
      )}
    </>
  );
}

export default App;
