import React from "react";
import { IconButtonContainer } from "./IconButton.styles";
import makeClassName from "../../utils/makeClassName";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  size?: "small" | "normal";
  type?: "button" | "submit";
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const IconButton: React.FC<IconButtonProps> = ({
  size,
  icon,
  type = "button",
  className,
  ...rest
}) => {
  return (
    <IconButtonContainer
      type={type}
      size={size}
      className={makeClassName("icon-button", className)}
      {...rest}
    >
      {icon}
    </IconButtonContainer>
  );
};
