import { JSX } from "solid-js";
import "./style.css";

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (<div>{props.children}</div>)
}
