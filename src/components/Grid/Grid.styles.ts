import styled, { css } from 'styled-components';
import { GridContentAlignment, GridItemsAlignment, GridDirection, GridJustification } from './Grid';

const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(breakpoint: string): any {
  const styles: any[] = [];

  GRID_SIZES.forEach((size) => {
    const key = `grid-${breakpoint}-${size}`;

    if (size === true) {
      styles.push(css`
        .${key} {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }
      `);

      return;
    }

    if (size === 'auto') {
      styles.push(css`
        .${key} {
          flex-basis: auto;
          flex-grow: 0;
          max-width: none;
        }
      `);

      return;
    }

    const width = `${Math.round(((size as number) / 12) * 10e7) / 10e5}%`;

    styles.push(css`
      .${key} {
        flex-basis: ${width};
        flex-grow: 0;
        max-width: ${width};
      }
    `);
  });

  return styles;
}

const getOffset = (val: number, div = 1) => {
  const parse = parseFloat(String(val));
  return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`;
};

function generateGutter(spacing: number) {
  if (spacing === 0) {
    return;
  }

  const themeSpacing = 8 * spacing;

  return css`
    margin: -${getOffset(themeSpacing, 2)};
    width: calc(100% + ${getOffset(themeSpacing)});
    & > * {
      padding: ${getOffset(themeSpacing, 2)};
    }
  `;
}

interface ContainerProps {
  spacing: number;
  alignContent: GridContentAlignment;
  alignItems: GridItemsAlignment;
  justifyContent: GridJustification;
  direction: GridDirection;
}

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};

  ${generateGrid('xs')};

  @media (min-width: 600px) {
    ${generateGrid('sm')};
  }

  @media (min-width: 960px) {
    ${generateGrid('md')};
  }

  @media (min-width: 1280px) {
    ${generateGrid('lg')};
  }

  @media (min-width: 1280px) {
    ${generateGrid('lg')};
  }

  @media (min-width: 1920px) {
    ${generateGrid('xl')};
  }

  ${(props) => generateGutter(props.spacing)};
`;

export const Item = styled.div`
  box-sizing: border-box;
  margin: 0;
`;
