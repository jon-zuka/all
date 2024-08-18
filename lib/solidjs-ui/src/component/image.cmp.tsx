import { JSX } from "solid-js";
import { styled } from "solid-styled-components";

const Background = styled("img")`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

type ImageProps = JSX.IntrinsicElements["img"] & {
  variation?: "background";
};

export const Image = (props: ImageProps) => {
  const src = () => props.src
  const variation = () => props.variation
  if (variation() === "background") return <Background src={src()} {...props} />;
  return <img src={src()} {...props} />;
};
