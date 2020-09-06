import styled from "styled-components";

export const CardBodyContainer = styled.div`
  padding: 16px;

  &::-webkit-scrollbar {
    width: 0.2em;
  }

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    overflow: visible;
    border-radius: 5px;
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    &::-webkit-scrollbar {
      opacity: 1;
    }
  }
`;
