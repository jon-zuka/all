import {
  css,
  Theme,
  useTheme,
  Grid,
  rgba,
  Button,
} from "@jon-zuka/solidjs-ui";
import { TomatoIcon } from "../TomatoTimer/TomatoIcon";
import { HoleIcon } from "./HoleIcon";
import { For, Show } from "solid-js";
import { chunckArray } from "../../utils";
import { setChildren, setOpen } from "../../composables/useModal";
import { Dialog } from "../TomatoTimer/Dialog";
import { useStore } from "../../stores/score";

export function TomatoScore() {
  const theme = useTheme() as Theme;
  const { pomodoros } = useStore();
  const rounds = () => chunckArray(pomodoros(), 4);
  return (
    <>
      <Grid.Container
        gap="1rem"
        style={{
          margin: "1rem 0",
        }}
      >
        <For each={rounds()}>
          {(round) => (
            <Grid.Cell
              span={[6]}
              classList={{
                [css`
                  border: 1px solid ${theme.colors.danger};
                  border-radius: 18px;
                  padding: 0.4rem 0.4rem;
                  color: ${rgba(theme.colors.text, 0.4)};
                  .tomato {
                    display: flex;
                    padding: 0.2rem;
                    width: 2rem;
                    height: 2rem;
                  }
                `]: true,
              }}
            >
              <Grid.Container gap=".4rem">
                <For each={round}>
                  {(pomodoro) => (
                    <Grid.Cell span={[3]} class="tomato">
                      <Show
                        when={pomodoro.startedAt !== null}
                        fallback={<HoleIcon />}
                      >
                        <TomatoIcon />
                      </Show>
                    </Grid.Cell>
                  )}
                </For>
              </Grid.Container>
            </Grid.Cell>
          )}
        </For>
        <Grid.Cell span={[12]}>
          <Button
            color="danger"
            fullWidth
            onClick={() => {
              setOpen(true);
              setChildren(<>{() => Dialog}</>);
            }}
          >
            Reset
          </Button>
        </Grid.Cell>
      </Grid.Container>
    </>
  );
}
