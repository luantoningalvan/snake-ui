import styled from "styled-components";

export const PaperContainer = styled.div`
  background: ${(props) => props.theme.palette.paper};
  color: ${(props) => props.theme.palette.text.primary};
  border-radius: 10px;
  padding: ${(props) => props.padding && "16px"};
  overflow: hidden;
`;
