import { useEffect, useState } from "react";
const useTimer = (totalDuration) => {
  let [time, setTime] = useState(Number(totalDuration) * 60);
  const [timeOn, setTimeOn] = useState(false);
  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime > 0 ? prevTime - 1 : prevTime);
      }, 1000);
    } else if (!timeOn) {
      clearInterval(interval);
      setTime(Number(totalDuration) * 60);
    }
    return () => clearInterval(interval);
  }, [timeOn]);
  return {
    time,
    setTimeOn,
  }
}

export default useTimer