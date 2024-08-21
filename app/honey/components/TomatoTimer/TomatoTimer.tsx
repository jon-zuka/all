import { secondsTo } from "../../utils";
import { useAudio } from "../../composables/useAudio";
import { createEffect } from "solid-js";
import { Button, css, Typography } from "@jon-zuka/solidjs-ui";
import {
  timeleft,
  reset,
  status,
  start,
  duration,
  onCompleted,
} from "../../stores/counter";
import { markCompleted, store } from "../../stores/score";

enum Duration {
  Pomodoro = 60 * 25,
  Break = 60 * 5,
  LongerBreak = 60 * 15,
  None = 0,
}

export const TomatoTimer = () => {
  const { audioComponent, playSound } = useAudio();
  const completedAll = () => store().pomodorosCompleted > 15;

  reset(Duration.Pomodoro);

  createEffect(() => {
    document.title = `(${secondsTo(timeleft(), "mm-ss")}) Zychron`;
  });

  onCompleted(async () => {
    if (completedAll()) return;
    if (duration() === Duration.Pomodoro) {
      markCompleted();
      if (store().pomodorosCompleted === 16) {
        return;
      }
      if (store().pomodorosCompleted % 4 === 0) {
        reset(Duration.LongerBreak);
      } else {
        reset(Duration.Break);
      }
      start();
      await playSound("pomodoro-end.mp3");
      return;
    }
    if ([Duration.Break, Duration.LongerBreak].includes(duration())) {
      reset(Duration.Pomodoro);
      start();
      await playSound("pomodoro-start.mp3");
      return;
    }
  });

  return (
    <div
      class={css`
        margin: 0 auto;
        text-align: center;
        h2 {
          font-size: 3rem;
          margin-bottom: -0.8rem;
        }
        .subtitle {
          font-size: 1rem;
        }
        .timer {
          font-size: 5rem;
          margin: 1rem 0;
          font-family: monospace;
        }

        .button-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
          gap: 1.3rem;
        }
      `}
    >
      {audioComponent}
      <Typography align="center" as="h2" color="danger">
        Pomodoro
      </Typography>
      <Typography align="center" class="subtitle">Time management technique</Typography>

      <p class="timer">{secondsTo(timeleft(), "mm-ss")}</p>
      <div class="button-container">
        <Button
          disabled={completedAll()}
          color={status() !== "running" ? "warn" : "danger"}
          onClick={async () => {
            if (status() === "running") {
              reset();
            } else if (status() === "idle") {
              start();
              if (duration() === Duration.Pomodoro) {
                await playSound("pomodoro-start.mp3");
              }
            }
          }}
        >
          {status() === "running" ? "Stop" : "Start"}
        </Button>

        <Button
          disabled={status() === "running" || completedAll()}
          active={duration() === Duration.Pomodoro}
          color="success"
          onClick={() => {
            reset(Duration.Pomodoro);
          }}
        >
          Pomodoro
        </Button>

        <Button
          disabled={status() === "running" || completedAll()}
          active={duration() === Duration.Break}
          color="info"
          onClick={async () => {
            reset(Duration.Break);
          }}
        >
          Break
        </Button>

        <Button
          disabled={status() === "running" || completedAll()}
          active={duration() === Duration.LongerBreak || completedAll()}
          color="info"
          onClick={async () => {
            reset(Duration.LongerBreak);
          }}
        >
          Longer break
        </Button>
      </div>
    </div>
  );
};
