import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./Modal.styles";
import { Paper } from "../../";
import makeClassName from "../../utils/makeClassName";

export interface ModalProps {
  onClose(): void;
  open: boolean;
  title?: string;
  showCloseIcon?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, children, open, className, ...rest } = props;
  const modalRef = useRef<any>(null);
  const modalRoot = useRef<any>(null);

  useEffect(() => {
    if (global.window && !document.getElementById("modal-root")) {
      const elem = document.createElement("div");
      elem.setAttribute("id", "modal-root");
      document.body.appendChild(elem);
    }

    modalRoot.current = document.getElementById("modal-root");
  }, []);

  useEffect(() => {
    if (open) {
      if (modalRef.current !== null) {
        if (window.innerWidth > document.documentElement.clientWidth) {
          document.body.setAttribute(
            "style",
            "padding-right: 15px;overflow: hidden;"
          );
        } else {
          document.body.setAttribute("style", "overflow: hidden;");
        }
      }
    } else {
      document.body.setAttribute("style", "");
    }
  }, [open]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (open && modalRoot.current !== null) {
    return ReactDOM.createPortal(
      <>
        <Backdrop onClick={handleBackdropClick}>
          <div ref={modalRef}>
            <Paper
              padding={false}
              className={makeClassName("modal", className)}
              {...rest}
            >
              {children}
            </Paper>
          </div>
        </Backdrop>
      </>,
      modalRoot.current
    );
  } else {
    return null;
  }
};
