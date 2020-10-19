import React from "react";
import { generate } from "shortid";
import { Container } from "./Breadcrumbs.styles";
import makeClassName from "../../utils/makeClassName";

export interface BreadcrumbsProps {
  list: {
    title: string;
    onClick?(): void;
  }[];
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  list = [],
  className,
  ...rest
}) => (
  <Container className={makeClassName("breadcrumbs", className)} {...rest}>
    {list.map((item) => (
      <li key={generate()}>
        <>
          {!!item.onClick ? (
            <a onClick={item.onClick}>{item.title}</a>
          ) : (
            <>{item.title}</>
          )}
        </>
      </li>
    ))}
  </Container>
);

export default Breadcrumbs;
