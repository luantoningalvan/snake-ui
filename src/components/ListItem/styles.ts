import styled from "styled-components";
import defaultTheme from "../theme/defaultTheme";
import { IconButton } from "../IconButton";

export const ListItemContainer = styled.li<{ current?: boolean }>`
  background: ${(props) => (props.current ? "rgba(0,0,0,0.1)" : "transparent")};
  transition: background 0.3s;
  list-style: none;
  cursor: pointer;
  color: ${(props) => props.theme.palette.text.primary};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

ListItemContainer.defaultProps = { theme: defaultTheme };

export const ListItemHeader = styled.div<{ nested?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${(props) => (props.nested ? "8px 8px 8px 32px" : "16px")};
  height: ${(props) => (props.nested ? "40px" : "48px")};
  box-sizing: border-box;
`;

export const ListItemText = styled.span`
  flex: 1;
`;

export const ListItemIcon = styled.span`
  color: ${(props) => props.theme.palette.text.primary};
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const ExpandedList = styled.ul`
  padding: 0px;
  margin: 0px;
`;

export const ExpandButton = styled(IconButton)<{ expanded: boolean }>`
  transition: transform 0.2s;
  transform: ${(props) => (props.expanded ? "rotate(-90deg)" : "none")};
`;

ListItemIcon.defaultProps = { theme: defaultTheme };
