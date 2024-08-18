import { Button, css } from "@repo/solidjs-ui";
import { resetStore } from "../../composables/store";
import { setChildren, setOpen } from "../../composables/useModal";

export function Dialog() {
  return (
    <div
      class={css`
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 2rem;
        background-color: black;
        color: white;
        border-radius: 1rem;
        min-width: 20rem;
      `}
    >
      <div> Are you sure that you want to reset your progress?</div>
      <div
        class={css`
          display: flex;
          gap: 1rem;
        `}
      >
      </div>

      <Button
          color="success"
          onClick={() => {
            setOpen(false);
            setChildren(<></>);
          }}
        >
          No
        </Button>
      <Button
          color="danger"
          onClick={() => {
            resetStore();
            setOpen(false);
            setChildren(<></>);
          }}
        >
          Yes
    </Button>
    </div>
  );
}
