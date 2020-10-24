import React from "react";
import makeClassName from "../../utils/makeClassName";

interface MenuProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
const Menu: React.FC<MenuProps> = ({ children, style, className, ...rest }) => (
  <ul
    style={{ padding: "8px 0px", ...style }}
    className={makeClassName("list", className)}
    {...rest}
  >
    {children}
  </ul>
);

export default Menu;
