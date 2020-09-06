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

export const Button: React.FC<ButtonProps> = ({ type, children, ...rest }) => {
  return (
    <>
      {/* @ts-ignore */}
      <ButtonContainer {...rest} type={type}>
        {children}
      </ButtonContainer>
    </>
  );
};
