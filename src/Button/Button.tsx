import React from "react";
import { ButtonContainer } from "./Button.styles";

export interface ButtonProps {
  icon?: JSX.Element;
  variant?: "outlined" | "contained" | "filled";
  size?: "small" | "normal";
  type?: "button" | "submit";
  fullWidth?: boolean;
  onClick?: React.MouseEvent<HTMLButtonElement>;
  color: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ children, type = "button", ...rest }, ref) => (
    <ButtonContainer {...rest} ref={ref} type={type}>
      {children}
    </ButtonContainer>
  )
);
