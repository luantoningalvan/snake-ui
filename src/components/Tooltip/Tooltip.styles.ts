import styled from "styled-components";
import defaultTheme from "../theme/defaultTheme";

export const Container = styled.div`
  position: relative;

  span {
    background: ${(props) => props.theme.palette.alert.error};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 8px);
    width: 140px;
    right: -8px;
    color: #312e38;

    &::before {
      content: "";
      border-style: solid;
      border-color: ${(props) => props.theme.palette.alert.error} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      right: 8px;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

Container.defaultProps = { theme: defaultTheme };
