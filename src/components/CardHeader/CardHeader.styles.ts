import styled from "styled-components";

export const CardHeaderContainer = styled.div`
  padding: 16px 16px 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1em;
  }

  .actions {
    display: flex;

    button + button {
      margin-left: 8px;
    }
  }
`;
