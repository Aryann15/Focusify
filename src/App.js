import React, {useState} from "react";

import Form from "./components/Form";
import Timer from "./components/Timer";
import Finished from "./components/Finished";

function App() {

  const[timeLeft , setTimeLeft] = useState (true);
  
  return (
    <>
    <Form />
    {
      timeLeft ? <Timer /> : <Finished />
    }
    </>
  );
}

export default App;
