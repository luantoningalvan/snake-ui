import React from "react";
import { PaperContainer } from "./Paper.styles";

export interface PaperProps {
  padding: boolean;
}

export const Paper: React.FC<PaperProps> = ({ children, padding }) => (
  <PaperContainer padding={padding}>{children}</PaperContainer>
);
