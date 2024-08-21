import { createSignal } from "solid-js";
import { Action, MessageResponse } from "./types";

let worker: Worker | undefined = undefined;
let callback: Function = () => {}

worker = new Worker(new URL("./worker.ts", import.meta.url), {
  type: "module",
});

function postMessage(message: Action) {
  worker?.postMessage(message);
}

function onCompleted(fn: Function) {
  callback = fn
}

worker.onmessage = async (event: MessageEvent<MessageResponse>) => {
  setTimeLeft(event.data.timeleft);
  setStatus(event.data.status);
  setDuration(event.data.duration);
  if (event.data.status === "completed") {
    await callback()
  }
};

const [timeleft, setTimeLeft] = createSignal(0);
const [status, setStatus] = createSignal<MessageResponse["status"]>("idle");
const [duration, setDuration] = createSignal<MessageResponse["duration"]>(0);

function start() {
  postMessage({
    type: "Start",
  });
}

function reset(seconds?: number) {
  postMessage({
    type: "Reset",
    payload: seconds,
  });
}

export {
  timeleft,
  status,
  start,
  reset,
  onCompleted,
  duration,
}
