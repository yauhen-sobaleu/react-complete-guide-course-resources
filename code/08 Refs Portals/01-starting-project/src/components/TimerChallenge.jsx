import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  // useRef is used to manage a value that will not be lost when the component is re-rendered
  // Also changes to the ref do not trigger a re-render
  const timer = useRef();

  // Bound this ref to the ResultModal component
  // to be able to open the modal programmatically
  const dialog = useRef();

  const [timeElapsed, setTimeElapsed] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeElapsed(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? '' : 's'}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
