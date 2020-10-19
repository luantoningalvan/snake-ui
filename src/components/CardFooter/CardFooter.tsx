import React from "react";
import { CardFooterContainer } from "./CardFooter.styles";
import makeClassName from "../../utils/makeClassName";

export interface CardFooterProps {
  link?: string;
  action?(): void;
  label: string | object;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  link,
  action,
  label,
  className,
  ...rest
}) => (
  <CardFooterContainer
    href={link}
    onClick={action}
    className={makeClassName("card-footer", className)}
    {...rest}
  >
    {label}
  </CardFooterContainer>
);
