import React, { useState } from 'react';

export function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  let intervalRef;

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef);
    intervalRef = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <div onClick={handleStart}>Start</div>
      <div onClick={handleStop}>Stop</div>
      <h3>Time passed: {secondsPassed.toFixed(3)}</h3>
      <ul>
        {Array.from({ length: Number(secondsPassed.toFixed(0)) })
          .map((_, j) => j)
          .map((i) => (i % 60 === 0 ? <li>{i / 60} min</li> : null))}
      </ul>
    </>
  );
}
