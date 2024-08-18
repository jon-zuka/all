export { Input };
import { Component, splitProps, type JSX } from "solid-js";
import { getColor, type ThemeColor } from "../../theme";
import { styled } from "solid-styled-components";

export type InputProps = Omit<
  JSX.HTMLAttributes<HTMLLabelElement>,
  "onChange"
> & {
  label: string;
  value: string;
  placeholder?: string;
  color: ThemeColor;
  password?: boolean;
  onChange: (value: string) => any;
};

const Input: Component<InputProps> = (props) => {
  const [split, rest] = splitProps(props, [
    "value",
    "onChange",
    "placeholder",
    "label",
    "color",
    "password"
  ]);
  return (
    <StyledLabel {...rest} color={split.color}>
      <input
        type={split.password ? "password" : "text"}
        value={split.value}
        placeholder={split.placeholder ?? split.label}
        onChange={(e) => split.onChange(e.target.value)}
      />
    </StyledLabel>
  );
};

const StyledLabel = styled("label")`
  width: 100%;
  display: flex;
  overflow: hidden;
  border: 1px solid ${({ color }) => getColor(color)};
  color: ${({ color }) => getColor(color)};
  background-color: transparent;
  padding: 0.6rem 1rem;
  box-sizing: border-box;
  border-radius: ${({ theme }) => getColor(theme?.shapes.bevel)};
  position: relative;

  input {
    &::placeholder {
      color: ${({ color }) => getColor(color)};
      opacity: 0.5;
    }
    min-width: min-content;
    width: auto;
    color: inherit;
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    resize: none;
  }
  & > span {
    position: absolute;
  }
`;
