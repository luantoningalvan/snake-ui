import React from "react";
import { TabStyle } from "./Tab.styles";
import makeClassName from "../../utils/makeClassName";

export interface TabProps {
  label: string;
  current: boolean;
  onClick(): any;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Tab: React.FC<TabProps> = ({
  label,
  current,
  onClick,
  className,
  ...props
}) => (
  <TabStyle
    current={current}
    className={makeClassName("tab", className)}
    {...props}
  >
    <a onClick={onClick}>{label}</a>
  </TabStyle>
);

export default Tab;
