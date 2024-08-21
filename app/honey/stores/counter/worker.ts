import { getUtcTimestamp } from "../../utils";
import { Action, MessageResponse } from "./types";

let intervalHandle: any = undefined;
let startTime = getUtcTimestamp();
let duration = 0;

function handleAction(action: Action) {
  if (action.type === "Start" && !intervalHandle) {
    intervalHandle = setInterval(() => {
      const timeleft = duration - (getUtcTimestamp() - startTime);
      if (timeleft <= 0) {
        clearInterval(intervalHandle)
        postMessage({
          status: "completed",
          timeleft: duration,
          duration
        } satisfies MessageResponse);
        return;
      }
      postMessage({
        status: "running",
        timeleft,
        duration
      } satisfies MessageResponse);
    }, 1000);
    return;
  }
  if (action.type === "Reset") {
    if (action.payload) {
      duration = action.payload
    }
    clearInterval(intervalHandle);
    intervalHandle = undefined;
    startTime = getUtcTimestamp();
    const timeleft = duration - (getUtcTimestamp() - startTime);
    postMessage({
      status: "idle",
      timeleft,
      duration
    } satisfies MessageResponse);
    return;
  }
}

onmessage = (event: MessageEvent<Action>) => {
  handleAction(event.data);
};
