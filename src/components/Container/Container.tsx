import React from "react";

import { ContainerContainer } from "./Container.styles";

const Container = ({ children, ...rest }) => (
  <ContainerContainer {...rest}>{children}</ContainerContainer>
);

export { Container };
