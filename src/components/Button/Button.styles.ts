import styled from "styled-components";
import { readableColor } from "polished";
import { ButtonProps } from "./Button";
import defaultTheme from "../theme/defaultTheme";

export const ButtonContainer = styled.button<ButtonProps>`
  background: ${(props) =>
    props.variant === "outlined"
      ? "transparent"
      : props.theme.palette[props.color as string]};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.variant === "outlined"
      ? `${
          props.color
            ? props.theme.palette[props.color as string]
            : props.theme.palette.border
        }`
      : readableColor(props.theme.palette[props.color as string] || "yellow")};
  border-radius: 4px;
  font-size: 0.875rem;
  text-align: center;
  padding: ${(props) => (props.size === "small" ? "8px" : "12px")};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: none;
  outline: none;
  width: ${(props) => (props.fullWidth ? "100%" : "inherit")};
  border: ${(props) =>
    props.variant === "outlined"
      ? `1px solid ${
          props.color
            ? props.theme.palette[props.color as string]
            : props.theme.palette.border
        }`
      : "none"};
  transition: filter 0.3s;
  &:hover {
    filter: brightness(90%);
  }

  svg {
    color: ${(props) =>
      props.variant === "outlined"
        ? `${
            props.color
              ? props.theme.palette[props.color]
              : props.theme.palette.border
          }`
        : readableColor(
            props.theme.palette[props.color as string] || "yellow"
          )};
    margin-right: 8px;
  }
`;
ButtonContainer.defaultProps = { theme: defaultTheme };
