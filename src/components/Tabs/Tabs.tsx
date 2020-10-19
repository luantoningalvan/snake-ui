import React from "react";
import { TabsContainer } from "./Tabs.styles";
import makeClassName from "../../utils/makeClassName";

export interface TabsProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Tabs: React.FC<TabsProps> = ({ children, className, ...rest }) => (
  <TabsContainer className={makeClassName("tabs", className)} {...rest}>
    {children}
  </TabsContainer>
);
