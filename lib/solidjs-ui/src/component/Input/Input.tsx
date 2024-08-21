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
  error: string;
  onChange: (value: string) => any;
};

const Input: Component<InputProps> = (props) => {
  const [split, rest] = splitProps(props, [
    "value",
    "onChange",
    "placeholder",
    "label",
    "color",
    "password",
    "error"
  ]);
  return (
    <StyledLabel {...rest} color={split.error ? 'danger' : split.color}>
      <input
        type={split.password ? "password" : "text"}
        value={split.value}
        placeholder={split.placeholder ?? split.label}
        onChange={(e) => split.onChange(e.target.value)}
      />
      <p class="error">{split.error}</p>
    </StyledLabel>
  );
};

const StyledLabel = styled("label")`
  /* width: 100%; */
  /* display: flex; */
  /* overflow: hidden; */
  /* background-color: transparent; */
  /* box-sizing: border-box; */
  /* position: relative; */
  /* display: flex; */
  /* min-height: 4rem; */
  .error {
    text-align: left;
    min-height: 1.2rem;
    margin-top: .3rem;
    font-size: .8rem;
  }
  
  color: ${({ theme, color }) => getColor(theme!, color)};
  input {
    border-radius: ${({ theme }) => getColor(theme!, theme?.shapes.bevel)};
    border: 1px solid ${({theme,  color }) => getColor(theme!, color)};
    padding: 0.6rem 1rem;
    &::placeholder {
      color: ${({ theme, color }) => getColor(theme!, color)};
      opacity: 0.5;
    }
    min-width: min-content;
    width: auto;
    color: inherit;
    width: 100%;
    background-color: transparent;
    outline: none;
    /* border: none; */
    resize: none;
  }
  & > span {
    position: absolute;
  }
`;
