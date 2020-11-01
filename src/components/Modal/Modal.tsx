import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import makeClassName from "../../utils/makeClassName";
import { Paper, IconButton } from "../../";
import { FiX } from "react-icons/fi";
import { Backdrop, ModalHeader, ModalContainer } from "./Modal.styles";

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
  const {
    onClose,
    children,
    open,
    showCloseIcon,
    title,
    className,
    ...rest
  } = props;
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
          <ModalContainer ref={modalRef}>
            <Paper className={makeClassName("modal", className)} {...rest}>
              {(!!title || !!showCloseIcon) && (
                <ModalHeader>
                  {showCloseIcon && <h3>{title}</h3>}
                  {showCloseIcon && (
                    <IconButton icon={<FiX />} onClick={onClose} />
                  )}
                </ModalHeader>
              )}

              {children}
            </Paper>
          </ModalContainer>
        </Backdrop>
      </>,
      modalRoot.current
    );
  } else {
    return null;
  }
};
