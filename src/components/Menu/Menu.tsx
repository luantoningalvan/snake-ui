import React from "react";
import { Dropdown, DropdownProps } from "../../";
import { MenuContainer, MenuItem, MenuItemIcon } from "./Menu.styles";

interface MenuProps extends DropdownProps {
  options: {
    label: string;
    icon?: JSX.Element;
    onClick?(): void;
  }[];
}

export const Menu: React.FC<MenuProps> = ({
  anchorEl,
  onClose,
  open,
  placement,
  options,
  ...rest
}) => {
  return (
    <Dropdown
      anchorEl={anchorEl}
      onClose={onClose}
      open={open}
      placement={placement}
      {...rest}
    >
      <MenuContainer>
        {options.map((option) => (
          <MenuItem onClick={option.onClick}>
            {option.icon && <MenuItemIcon>{option.icon}</MenuItemIcon>}
            {option.label}
          </MenuItem>
        ))}
      </MenuContainer>
    </Dropdown>
  );
};

export default Menu;
