import React from "react";

export interface CollapseProps {
  expanded?: boolean;
  children: React.ReactNode;
}

export const Collapse: any = ({ expanded, children }: CollapseProps) => {
  if (expanded) {
    return children;
  }
  return null;
};

export default Collapse;
