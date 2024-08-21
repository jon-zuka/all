interface Action<T, P = undefined> {
  type: T;
  payload?: P;
}

export type MessageResponse = {
  status: "completed" | "running" | "idle";
  timeleft: number;
  duration: number;
};


export type StartAction = Action<"Start">;
export type ResetAction = Action<"Reset", number>;
type ActionType = StartAction | ResetAction ;



export { ActionType as Action };

