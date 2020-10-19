import styled from "styled-components";
import defaultTheme from "../theme/defaultTheme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding-bottom: 28px;
`;

type StepProps = {
  checked: boolean;
  current: boolean;
};

export const Step = styled.div<StepProps>`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;

  .step-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .step-id {
    height: 40px;
    width: 40px;
    background: ${(props) =>
      props.checked || props.current
        ? props.theme.palette.secondary
        : props.theme.palette.paper};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 48px;
    line-height: 20px;
  }

  &:after {
    content: "";
    height: 2px;
    width: calc(100% - 40px);
    background: ${(props) =>
      props.checked
        ? props.theme.palette.secondary
        : props.theme.palette.paper};
  }

  &:first-child {
    &:before {
      content: "";
      height: 0px;
      width: 0px;
    }
  }

  &:last-child {
    flex: inherit;
    &:after {
      content: "";
      height: 0px;
      width: 0px;
    }
  }
`;

Container.defaultProps = { theme: defaultTheme };
