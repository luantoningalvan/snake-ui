import styled from "styled-components";
import { PaperProps } from "./Paper";
import defaultTheme from "../theme/defaultTheme";

export const PaperContainer = styled.div<PaperProps>`
  background: ${(props) => props.theme.palette.paper};
  color: ${(props) => props.theme.palette.text.primary};
  border-radius: 10px;
  padding: ${(props) => props.padding && "16px"};
  overflow: hidden;
`;

PaperContainer.defaultProps = { theme: defaultTheme };
