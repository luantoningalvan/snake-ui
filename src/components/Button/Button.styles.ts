import styled, { css } from "styled-components";
import defaultTheme from "../theme/defaultTheme";
import { shade, transparentize, readableColor } from "polished";

import { ButtonProps } from "./Button";

const getVariantStyle = (variant: "contained" | "outlined", color: string) => {
  switch (variant) {
    case "contained":
      return css`
        color: ${readableColor(color)};
        background: ${color};

        &:hover {
          background: ${shade(0.2, color)};
        }
      `;
    case "outlined":
    default:
      return css`
        background: transparent;
        border: 1px solid ${color};
        color: ${color};

        &:hover {
          background: ${transparentize(0.9, color)};
        }
      `;
  }
};

export const ButtonContainer = styled.button<ButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
  padding: ${(props) => (props.size === "small" ? "8px" : "12px")};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: none;
  outline: none;
  width: ${(props) => (props.fullWidth ? "100%" : "inherit")};

  .snake-button-startIcon { height: 0.9rem;margin-right: 8px; }
  .snake-button-endIcon { height: 0.9rem;margin-left: 8px; }

  ${(props) =>
    getVariantStyle(
      props.variant || "contained",
      props.theme.palette[props.color || "primary"]
    )};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
ButtonContainer.defaultProps = { theme: defaultTheme };
