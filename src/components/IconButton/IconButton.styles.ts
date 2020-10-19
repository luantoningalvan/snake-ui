import styled from "styled-components";
import { IconButtonProps } from "./IconButton";
import defaultTheme from "../theme/defaultTheme";

export const IconButtonContainer = styled.button<Omit<IconButtonProps, "icon">>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 0.875rem;
  text-align: center;
  padding: ${(props) => (props.size === "small" ? "8px" : "12px")};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: none;
  outline: none;
  border: none;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(90%);
  }

  background: transparent;
  border-radius: 100%;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  padding: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  svg {
    height: 20px;
    width: 20px;
    margin: 0px;
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;
IconButtonContainer.defaultProps = { theme: defaultTheme };
