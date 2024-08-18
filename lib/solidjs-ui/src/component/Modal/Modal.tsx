import { createSignal, JSX, Show } from "solid-js";
import { styled } from "solid-styled-components";

const [isOpen, setIsOpen] = createSignal(false);
const [content, setContent] = createSignal<JSX.Element>(<></>);

const openModal = (content: (() => JSX.Element) | JSX.Element) => {
  setContent(() => <>{content}</>);
  setIsOpen(true);
};
const closeModal = () => {
  setIsOpen(false);
  setContent(<></>);
};
export const useModal = () => {
  return { isOpen, openModal, closeModal };
};

const StyledDiv = styled("div")`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .backdrop {
    background-color: ${({ theme }) => theme?.colors.background};
    position: fixed;
    inset: 0;
    opacity: 0.5;
  }
  .content {
    position: relative;
    z-index: 10;
  }
`;

export const Modal = () => {
  return (
    <Show when={isOpen()} fallback={<></>}>
      <StyledDiv>
        <div class="backdrop" onClick={closeModal} />
        <div class="content">{content()}</div>
      </StyledDiv>
    </Show>
  );
};
