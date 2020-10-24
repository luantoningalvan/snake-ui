import React, { useState } from "react";
import { Menu } from "..";

export default {
  title: "Components/Menu",
  component: Menu,
};

export const Main = () => {
  const [anchorEl, setAnchorEl] = useState();

  return (
    <>
      <button onClick={(e) => setAnchorEl(e.currentTarget)}>Abrir Menu</button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        placement="bottom-start"
        options={[
          { label: "Item 1", icon: <span>😜</span> },
          { label: "Item 2", icon: <span>😭</span> },
          { label: "Item 3", icon: <span>😍</span> },
        ]}
      />
    </>
  );
};
