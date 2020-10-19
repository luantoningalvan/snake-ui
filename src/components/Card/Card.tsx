import React from "react";
import { CardContainer } from "./Card.styles";
import makeClassName from "../../utils/makeClassName";

export interface CardProps {
  bordered?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  bordered,
  className,
  ...rest
}) => (
  <CardContainer
    bordered={bordered}
    className={makeClassName("card", className)}
    {...rest}
  >
    {children}
  </CardContainer>
);
