import React from "react";
import { Card, CardHeader, CardFooter, CardBody } from "..";

export default {
  title: "Components/Card",
  component: Card,
};

export const Main = () => {
  return (
    <Card>
      <CardHeader title="Título do card" />
      <CardBody>Conteúdo do card</CardBody>
      <CardFooter label="Link do card" />
    </Card>
  );
};
