import * as React from 'react';
import { Container, Item } from './Grid.styles';
export type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

export type GridContentAlignment =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent?: GridContentAlignment;
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems?: GridItemsAlignment;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container?: boolean;
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction?: GridDirection;
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item?: boolean;
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justifyContent?: GridJustification;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg?: boolean | GridSize;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md?: boolean | GridSize;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm?: boolean | GridSize;
  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing?: GridSpacing;
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap?: GridWrap;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl?: boolean | GridSize;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs?: boolean | GridSize;
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth?: boolean;

  style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = (props) => {
  const {
    alignContent = 'stretch',
    alignItems = 'stretch',
    container = false,
    direction = 'row',
    item = false,
    justifyContent = 'flex-start',
    lg = false,
    md = false,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false,
    style,
    ...other
  } = props;

  const generateClasses = () => {
    let classes = '';

    const breakpoints: { [key: string]: any } = {
      xs,
      sm,
      md,
      lg,
      xl
    };

    Array.from(['xs', 'sm', 'md', 'lg', 'xl']).map((breakpoint) => {
      if (breakpoints[breakpoint]) {
        classes = classes.concat(`grid-${breakpoint}-${breakpoints[breakpoint]} `);
      }
    });

    return classes;
  };

  if (props.container) {
    return (
      <Container
        {...other}
        spacing={spacing}
        className={`spacing-xs-${spacing}`}
        alignContent={alignContent}
        alignItems={alignItems}
        justifyContent={justifyContent}
        direction={direction}
        style={style}
      />
    );
  } else if (props.item) {
    return <Item {...other} className={generateClasses()} />;
  }
};

export default Grid;
