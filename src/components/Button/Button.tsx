import React from "react";
import { ButtonContainer } from "./Button.styles";
import makeClassName from "../../utils/makeClassName";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element;
  variant?: "outlined" | "contained" | "filled";
  size?: "small" | "normal";
  type?: "button" | "submit";
  fullWidth?: boolean;
  color?: "primary" | "secondary";
  className?: string;
  id?: string;
  styles?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  color = "primary",
  ...rest
}) => {
  return (
    <ButtonContainer
      {...rest}
      type={type}
      color={color}
      className={makeClassName("button", className)}
    >
      {children}
    </ButtonContainer>
  );
};
