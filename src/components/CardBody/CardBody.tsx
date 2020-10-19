import React from "react";
import { CardBodyContainer } from "./CardBody.styles";
import makeClassName from "../../utils/makeClassName";

interface CardBodyProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className,
  ...rest
}) => (
  <CardBodyContainer
    className={makeClassName("card-body", className)}
    {...rest}
  >
    {children}
  </CardBodyContainer>
);
