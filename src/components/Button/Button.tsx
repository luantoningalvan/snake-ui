import React from "react";
import { ButtonContainer } from "./Button.styles";

export interface ButtonProps {
  variant?: "contained" | "outline" | "text";
  type?: "button" | "submit";
  color?: "primary" | "success" | "danger" | "warning" | "neutral";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = "contained",
    color = "neutral",
    fullWidth,
    size = "sm",
    type = "button",
  } = props;
  return (
    <ButtonContainer
      type={type}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
    >
      {children}
    </ButtonContainer>
  );
};
