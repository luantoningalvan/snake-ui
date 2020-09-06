import React from "react";
import { CardContainer } from "./Card.styles";

export interface CardProps {
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, bordered, ...rest }) => (
  <CardContainer bordered={bordered} {...rest}>
    {children}
  </CardContainer>
);
