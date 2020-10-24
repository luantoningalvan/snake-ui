import styled, { css } from "styled-components";
import defaultTheme from "../theme/defaultTheme";

interface DropdownContainerProps {
  coordinates: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  width: number;
  height: number;
  scrolledPixels: number;
  arrow?: boolean;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}

const getPlacement = (props: any) => {
  console.log(props);
  const {
    placement,
    top,
    left,
    toggleHeight,
    toggleWidth,
    scrolled,
    dropdownWidth,
    dropdownHeight,
  } = props;

  const splitted = placement.split("-");
  const first = splitted[0];
  const last = splitted[1];

  let leftDistance = 0;
  let topDistance = 0;
  let rotate = 0;
  let direction = "";
  let align = "";

  switch (last) {
    case "start":
      align = "flex-start";
      break;
    case "end":
      align = "flex-end";
      break;
    case undefined:
      align = "center";
      break;
  }

  switch (first) {
    case "bottom": {
      topDistance = top + scrolled + toggleHeight;
      direction = "column";
      rotate = 360;

      if (last === "end") leftDistance = left + toggleWidth - dropdownWidth;
      if (last === "start") leftDistance = left;
      if (last === undefined)
        leftDistance = left - dropdownWidth / 2 + toggleWidth / 2;
      break;
    }
    case "top": {
      topDistance = top + scrolled - dropdownHeight;
      direction = "column-reverse";
      rotate = 180;

      if (last === "end") leftDistance = left + toggleWidth - dropdownWidth;
      if (last === "start") leftDistance = left;
      if (last === undefined)
        leftDistance = left - dropdownWidth / 2 + toggleWidth / 2;
      break;
    }
    case "left": {
      leftDistance = left - dropdownWidth;
      direction = "row-reverse";
      rotate = 90;

      if (last === "end")
        topDistance = top + scrolled - dropdownHeight + toggleHeight;
      if (last === "start") topDistance = top + scrolled;
      if (last === undefined)
        topDistance = top + scrolled - dropdownHeight / 2 + toggleHeight / 2;
      break;
    }
    case "right": {
      leftDistance = left + toggleWidth;
      direction = "row";
      rotate = 270;

      if (last === "end")
        topDistance = top + scrolled - dropdownHeight + toggleHeight;
      if (last === "start") topDistance = top + scrolled;
      if (last === undefined)
        topDistance = top + scrolled - dropdownHeight / 2 + toggleHeight / 2;
      break;
    }
  }

  return css`
    top: ${topDistance}px;
    left: ${leftDistance}px;

    .dropdown-child {
      flex-direction: ${direction};
      align-items: ${align};

      > span {
        transform: rotate(${`${rotate}deg`});

        ${first === "top" || first === "bottom"
          ? css`
              margin: 0px 8px;
            `
          : css`
              margin: 8px 0px;
            `}
      }
    }
  `;
};

export const DropdownContainer = styled.div<DropdownContainerProps>`
  position: absolute;
  opacity: ${(props) => (props.height === 0 || props.width === 0 ? 0 : 1)};

  .dropdown-child {
    padding: 8px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s;

    > span {
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid transparent;
      border-bottom: 8px solid ${(props) => props.theme.palette.paper};
    }

    .dropdown-content {
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      flex: none;
      order: 1;
      align-self: flex-start;
      box-sizing: border-box;
      box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.12);
      background: ${(props) => props.theme.palette.paper};
    }
  }

  ${(props) =>
    getPlacement({
      placement: props.placement,
      top: props.coordinates.top,
      left: props.coordinates.left,
      toggleHeight: props.coordinates.height,
      toggleWidth: props.coordinates.width,
      dropdownHeight: props.height,
      dropdownWidth: props.width,
      scrolled: props.scrolledPixels,
    })};
`;

DropdownContainer.defaultProps = { theme: defaultTheme };
