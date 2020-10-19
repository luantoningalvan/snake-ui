import React from "react";
import { generate } from "shortid";
import { Container } from "./Breadcrumbs.styles";

export interface BreadcrumbsProps {
  list: {
    title: string;
    onClick?(): void;
  }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ list = [] }) => (
  <Container>
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
