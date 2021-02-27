import React from "react";
import { ButtonContainer } from "./Button.styles";
import makeClassName from "../../utils/makeClassName";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  variant?: "outlined" | "contained";
  size?: "small" | "normal";
  type?: "button" | "submit";
  fullWidth?: boolean;
  color?: "primary" | "secondary" | "neutral";
  className?: string;
  id?: string;
  styles?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  color = "primary",
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <ButtonContainer
      {...rest}
      type={type}
      color={color}
      className={makeClassName("button", className)}
    >
      {startIcon && (
        <span className={makeClassName("button", "startIcon", className)}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className={makeClassName("button", "endIcon", className)}>
          {endIcon}
        </span>
      )}
    </ButtonContainer>
  );
};
