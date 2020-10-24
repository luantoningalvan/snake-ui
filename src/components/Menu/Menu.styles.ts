import styled from "styled-components";
import defaultTheme from "../theme/defaultTheme";

export const MenuContainer = styled.ul`
  margin: 0px;
  padding: 8px 0px;
  min-width: 100px;
`;

export const MenuItem = styled.li`
  color: ${(props) => props.theme.palette.text.primary};
  list-style: none;
  padding: 8px 16px;
  user-select: none;
  cursor: pointer;
  transition: background linear 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItemIcon = styled.span`
  height: 22px;
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

MenuItem.defaultProps = { theme: defaultTheme };
