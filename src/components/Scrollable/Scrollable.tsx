import React from "react";
import { ScrollableContainer } from "./Scrollable.styles";

export interface ScrollableProps {
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  grow?: boolean;
}

export const Scrollable: React.FC<ScrollableProps> = ({
  children,
  topContent,
  bottomContent,
  grow,
}) => (
  <ScrollableContainer grow={grow}>
    {topContent && topContent}
    <div className="wrapped">
      <div className="inner">{children}</div>
    </div>
    {bottomContent && bottomContent}
    <div className="cover" />
  </ScrollableContainer>
);

export default Scrollable;
