import styled from "styled-components";
import defaultTheme from "../theme/defaultTheme";

export const CardFooterContainer = styled.a`
  text-align: center;
  padding: 16px;
  color: ${(props) => props.theme.palette.text.primary};
  text-decoration: none;
  border-top: 1px solid ${(props) => props.theme.palette.border};
  transition: 0.3s;
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;

CardFooterContainer.defaultProps = { theme: defaultTheme };
