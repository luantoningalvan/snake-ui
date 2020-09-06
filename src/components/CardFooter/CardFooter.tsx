import React from "react";
import { CardFooterContainer } from "./CardFooter.styles";

export interface CardFooterProps {
  link?: string;
  action?(): void;
  label: string | object;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  link,
  action,
  label,
}) => (
  <CardFooterContainer href={link} onClick={action}>
    {label}
  </CardFooterContainer>
);
