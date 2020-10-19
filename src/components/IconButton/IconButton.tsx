import React from "react";
import { IconButtonContainer } from "./IconButton.styles";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  size?: "small" | "normal";
  type?: "button" | "submit";
}

export const IconButton: React.FC<IconButtonProps> = ({
  size,
  icon,
  type = "button",
  ...rest
}) => {
  return (
    <IconButtonContainer type={type} size={size} {...rest}>
      {icon}
    </IconButtonContainer>
  );
};
