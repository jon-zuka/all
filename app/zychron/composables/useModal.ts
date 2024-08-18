import { createSignal, JSX } from "solid-js";

export const [children, setChildren] = createSignal<JSX.Element>();
export const [open, setOpen] = createSignal(false);