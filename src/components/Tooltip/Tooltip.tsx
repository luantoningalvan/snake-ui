import React from "react";
import { Container } from "./Tooltip.styles";
import makeClassName from "../../utils/makeClassName";

interface TooltipProps {
  title: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className,
  children,
  ...rest
}) => {
  return (
    <Container className={makeClassName("tooltip", className)} {...rest}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export { Tooltip };
