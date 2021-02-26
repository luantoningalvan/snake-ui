import React from "react";
import { FiLogOut } from "react-icons/fi";
import {
  DrawerContainer,
  List,
  MenuItem,
  Avatar,
  ClientIdentification,
  Logo,
} from "./Drawer.styles";

type MenuItem = {
  label: string;
  icon?: JSX.Element;
  onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
};

export interface DrawerProps {
  title: string;
  menu: MenuItem[];
  footer: {
    avatar: string;
    name: string;
    description: string;
    onLogout: () => void;
  };
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { title, menu, footer } = props;

  return (
    <DrawerContainer>
      <Logo>{title}</Logo>
      <List>
        {menu.map((item) => (
          <MenuItem>
            <div role="button" tabIndex={0} onClick={item.onClick}>
              {item.icon && item.icon}
              <span>{item.label}</span>
            </div>
          </MenuItem>
        ))}
      </List>
      <ClientIdentification>
        <Avatar url={footer.avatar} />
        <div className="text">
          <h3>{String(footer.name).split(" ")[0]}</h3>
          <span>{footer.description}</span>
        </div>
        <button onClick={footer.onLogout} type="button">
          <FiLogOut size={24} />
        </button>
      </ClientIdentification>
    </DrawerContainer>
  );
};

export default Drawer;
