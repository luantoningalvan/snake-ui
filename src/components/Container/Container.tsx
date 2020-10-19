import React from "react";
import { ContainerContainer } from "./Container.styles";
import makeClassName from "../../utils/makeClassName";

interface ContainerProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...rest
}) => (
  <ContainerContainer
    className={makeClassName("container", className)}
    {...rest}
  >
    {children}
  </ContainerContainer>
);
