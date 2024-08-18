import { createSignal } from "solid-js";

export { useCountdown, time };

let onComplete: Function = () => {};
const [timer, setTimer] = createSignal<NodeJS.Timeout>();
const [time, setTime] = createSignal(60 * 25);

const start = () => {
  if (timer() || !time()) return;
  setTimer(setInterval(decrementCount, 1000));
};

const isRunning = () => !!timer();

const stop = () => {
  if (timer()) {
    setTimer((timer) => {
      clearInterval(timer);
      return undefined;
    });
  }
};

const decrementCount = () => {
  let completed = false
  setTime((count) => {
    if (count > 0) {
      return count - 1;
    }
    stop();
    completed = true
    return count;
  });
  if (completed) {
    onComplete();
  }
};

const useCountdown = () => ({
  start,
  stop,
  setTime,
  timer,
  time,
  isRunning,
  onComplete(fn: Function) {
    onComplete = fn;
  },
});
