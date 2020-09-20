import React from "react";
import { TabsContainer } from "./Tabs.styles";

export interface TabsProps {
  style: React.CSSProperties;
}

export const Tabs: React.FC = ({ children, ...rest }) => (
  <TabsContainer className="tab-container" {...rest}>
    {children}
  </TabsContainer>
);
