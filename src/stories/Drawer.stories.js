import React from "react";
import { Drawer } from "..";
import avatar from '../assets/avatar.jpeg';
import {FiActivity} from 'react-icons/fi'
export default {
  title: "Components/Drawer",
  component: Drawer,
};

export const Main = () => {
  return (
      <Drawer
      title="AncapHub"
        menu={[
          {label :'Teste', icon: <FiActivity size={24}/>, onClick: () => alert('fds')}
        ]}
        footer={{
          avatar: avatar,
          name: "Luan batata",
          description: "Plano básico",
          onLogout: () => alert("Sair")
        }}
      />
  );
};
