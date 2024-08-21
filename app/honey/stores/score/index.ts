import { createEffect, createSignal } from "solid-js";
import { useLocalStorage } from "../../../../lib/util-js/src/main";
import { getUtcTimestamp } from "../../utils";
import { State } from "./types";

const {get, set} = useLocalStorage()

const initialState = () => ({
  pomodoros: Array(16).fill({
    startedAt: null,
  }),
  pomodorosCompleted: 0,
});

export const [store, setStore] = createSignal<State>(initialState());

export const resetStore = () => {
  setStore(initialState());
};

export const markCompleted = () => {
  const idx = store().pomodoros.findIndex((p) => p.startedAt === null);
  if (idx < 0) {
    return;
  }
  setStore((prevState) => {
    prevState.pomodoros.splice(idx, 1, {
      startedAt: getUtcTimestamp(),
    });
    prevState.pomodorosCompleted = prevState.pomodoros.reduce(
      (acc, pval) => acc + (pval.startedAt ? 1 : 0),
      0
    );
    return { ...prevState };
  });
};

export const useStore = () => ({
  pomodoros: () => store().pomodoros,
  reset: resetStore,
  // init: useLocalStorageStore,
  set: setStore,
})

// export function useLocalStorageStore() {
//   let savedStore = undefined;
//   createEffect(async () => {
//     savedStore = await get("store").then(
//       (s: any) => s && setStore(s)
//     );
//   });
//   createEffect(async () => {
//     set("store", store());
//   });
// }






