import React from "react";

import { ContainerContainer } from "./Container.styles";

export const Container: React.FC = ({ children, ...rest }) => (
  <ContainerContainer {...rest}>{children}</ContainerContainer>
);
