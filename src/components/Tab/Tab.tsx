import React from "react";
import { TabStyle } from "./Tab.styles";

export interface TabProps {
  label: string;
  current: boolean;
  onClick(): any;
}

export const Tab: React.FC<TabProps> = ({
  label,
  current,
  onClick,
  ...props
}) => (
  <TabStyle current={current} {...props}>
    <a onClick={onClick}>{label}</a>
  </TabStyle>
);

export default Tab;
