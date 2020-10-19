import React from "react";
import { PaperContainer } from "./Paper.styles";
import makeClassName from "../../utils/makeClassName";

export interface PaperProps {
  padding?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Paper: React.FC<PaperProps> = ({
  children,
  padding,
  className,
  ...rest
}) => (
  <PaperContainer
    padding={padding}
    className={makeClassName("paper", className)}
    {...rest}
  >
    {children}
  </PaperContainer>
);
