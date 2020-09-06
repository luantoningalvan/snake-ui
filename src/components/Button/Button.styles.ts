import styled from "styled-components";
import { readableColor } from "polished";

interface ButtonContainerProps {
  variant?: "contained" | "outline" | "text";
  color?: "primary" | "success" | "danger" | "warning" | "neutral";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: ${(props) =>
    props.variant === "outline" ? "transparent" : "red"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.variant === "outline"
      ? `${
          props.color
            ? props.theme.palette[props.color]
            : props.theme.palette.border
        }`
      : readableColor("red" || "yellow")};
  border-radius: 4px;
  font-size: 0.875rem;
  text-align: center;
  padding: ${(props) => (props.size === "sm" ? "8px" : "12px")};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: none;
  outline: none;
  width: ${(props) => (props.fullWidth ? "100%" : "inherit")};
  border: ${(props) =>
    props.variant === "outline"
      ? `1px solid ${
          props.color
            ? props.theme.palette[props.color]
            : props.theme.palette.border
        }`
      : "none"};
  transition: filter 0.3s;
  &:hover {
    filter: brightness(90%);
  }

  svg {
    color: ${(props) =>
      props.variant === "outline"
        ? `${
            props.color
              ? props.theme.palette[props.color]
              : props.theme.palette.border
          }`
        : readableColor("red" || "yellow")};
    margin-right: 8px;
  }
`;
