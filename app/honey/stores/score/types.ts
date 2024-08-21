export type Pomodoro = {
  startedAt: number;
};

export type State = {
  pomodoros: Pomodoro[];
  pomodorosCompleted: number;
};