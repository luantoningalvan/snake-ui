import React, { forwardRef } from "react";
import { IconButtonContainer } from "./IconButton.styles";

export interface IconButtonProps {
  icon: JSX.Element;
  variant?: "outlined" | "contained" | "filled";
  size?: "small" | "normal";
  type?: "button" | "submit";
  onClick?: React.MouseEvent<HTMLButtonElement>;
}

export const IconButton: React.FC<IconButtonProps> = forwardRef(
  ({ variant, size, icon, type = "button", ...rest }, ref) => (
    <IconButtonContainer
      type={type}
      variant={variant}
      size={size}
      {...rest}
      ref={ref}
    >
      {icon}
    </IconButtonContainer>
  )
);
