import React, { useState } from "react";
import { Modal } from "..";
import Button from "../components/Button";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Main = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        title="teste"
        showCloseIcon
        onClose={() => setOpen(false)}
        open={open}
      >
        <div>kkkk</div>
      </Modal>
      <Button onClick={() => setOpen(true)}>Abrir</Button>
    </>
  );
};
