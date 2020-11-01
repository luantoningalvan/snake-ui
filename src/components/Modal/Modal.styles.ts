import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  min-width: 200px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  h3 {
    font-size: 1rem;
    line-height: 100%;
    padding: 0px;
    margin: 0px;
  }
`;
