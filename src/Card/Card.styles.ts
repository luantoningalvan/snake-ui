import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;

  ${(props) => css`
    background: ${props.theme.palette.paper};
    color: ${props.theme.palette.text.primary};
    border: ${props.bordered
      ? `1px solid ${props.theme.palette.border}`
      : "none"};

    svg {
      color: ${props.theme.palette.text.primary};
    }
  `}
`;
