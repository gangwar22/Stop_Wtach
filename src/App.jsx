import  { useState } from "react";
import StopWatch from "./Component/StopWatch";
import Timer from "./Component/Timer";

function App() {
  const [isStopwatchVisible, setIsStopwatchVisible] = useState(true);

  const toggleComponent = () => {
    setIsStopwatchVisible(!isStopwatchVisible);
  };

  return (
    <>
        <button onClick={toggleComponent} className="color">
          {isStopwatchVisible ? "Show Timer" : "Show Stopwatch"}
        </button>
      {isStopwatchVisible ? <StopWatch /> : <Timer />}
    </>
  );
}

export default App;
