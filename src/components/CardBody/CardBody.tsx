import React from "react";
import { CardBodyContainer } from "./CardBody.styles";

export const CardBody: React.FC = ({ children, ...rest }) => (
  <CardBodyContainer {...rest}>{children}</CardBodyContainer>
);
