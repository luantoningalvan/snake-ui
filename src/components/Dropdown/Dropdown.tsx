import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { DropdownContainer } from "./Dropdown.styles";

interface DropdownProps {
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  onClose(): void;
  open: boolean;
  anchorEl: any;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  placement,
  onClose,
  open,
  anchorEl,
}) => {
  const dropdownRef = useRef(null);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const { x, y, height, width } = anchorEl?.getBoundingClientRect() || {};
  const scrolledPixels = window.scrollY;

  if (!document.getElementById("dropdown-root")) {
    const elem = document.createElement("div");
    elem.setAttribute("id", "dropdown-root");
    document.body.appendChild(elem);
  }

  const dropdownRoot = document.getElementById("dropdown-root");

  useEffect(() => {
    function clickOutside(e: any) {
      if (dropdownRef.current && !dropdownRef.current?.contains(e.target)) {
        onClose();
      }
    }
    if (dropdownRef.current !== null) {
      document.addEventListener("click", clickOutside);
      setDropdownWidth(dropdownRef.current.clientWidth);
      setDropdownHeight(dropdownRef.current.clientHeight);

      if (window.innerWidth > document.documentElement.clientWidth) {
        document.body.setAttribute(
          "style",
          "padding-right: 15px;overflow: hidden;"
        );
      } else {
        document.body.setAttribute("style", "overflow: hidden;");
      }
      dropdownRoot.setAttribute(
        "style",
        "position: fixed;z-index: 1300;right: 0px;bottom: 0px;top: 0px;left: 0px;"
      );
      return () => {
        document.removeEventListener("click", clickOutside);
        document.body.setAttribute("style", "");

        dropdownRoot.setAttribute(
          "style",
          "position: fixed;z-index: 1300;right: 0px;bottom: 0px;top: 0px;left: 0px;visibility:hidden;"
        );
      };
    }
  }, [open]);

  if (dropdownRoot) {
    return (
      <>
        {ReactDOM.createPortal(
          <>
            {open && (
              <>
                <div
                  style={{
                    zIndex: -1,
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                  }}
                />
                <DropdownContainer
                  arrow
                  ref={dropdownRef}
                  placement={placement}
                  width={dropdownWidth}
                  height={dropdownHeight}
                  scrolledPixels={scrolledPixels}
                  coordinates={{ top: y, left: x, height, width }}
                >
                  <div className="dropdown-child">
                    <span />
                    <div className="dropdown-content">{children}</div>
                  </div>
                </DropdownContainer>
              </>
            )}
          </>,
          dropdownRoot
        )}
      </>
    );
  } else {
    return null;
  }
};

export default Dropdown;
