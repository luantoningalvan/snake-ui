import React from "react";
import { List, ListItem } from "..";

export default {
  title: "Components/List",
  component: List,
};

export const Main = () => {
  return (
    <List>
      <ListItem label="teste" icon="😜" />
      <ListItem label="teste" />
      <ListItem
        label="teste"
        options={[
          { label: "Teste" },
          { label: "Teste" },
          { label: "Teste" },
          { label: "Teste" },
          { label: "Teste" },
          { label: "Teste" },
        ]}
      />
      <ListItem label="teste" />
      <ListItem label="teste" />
    </List>
  );
};
