import styled from "styled-components";
import defaultTheme from "../theme/defaultTheme";

export const FlipSwitchWrapper = styled.div`
  position: relative;
  width: 32px;
  user-select: none;
  margin: 0 0.5em;

  input[type="checkbox"] {
    display: none;
  }

  label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border-radius: 9px;
    background-color: ${(props) => props.theme.palette.text.secondary};
    & > div.switch-inner {
      width: 200%;
      margin-left: -100%;
      transition: margin 0.3s ease-in 0s;

      &::before {
        content: "";
        padding-left: 16px;
        background-color: ${(props) => props.theme.palette.secondary};
      }

      &::after {
        content: "";
        padding-right: 16px;
        background-color: ${(props) => props.theme.palette.secondary};
        color: #888888;
        text-align: right;
      }
    }
    & > div.switch {
      width: 16px;
      margin: 0px;
      background: #ffffff;
      border-radius: 8px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 16px;
      transition: all 0.3s ease-in 0s;
    }
  }

  .checkbox:checked + label > div.switch-inner {
    margin-left: 0;
  }

  .checkbox:checked + label > div.switch {
    right: 0;
  }
`;

FlipSwitchWrapper.defaultProps = { theme: defaultTheme };
