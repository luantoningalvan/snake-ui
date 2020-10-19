import React from "react";
import { Button, Grid } from "../";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button style={{ marginRight: 8 }}>Cor primária</Button>
        <Button color="secondary">Cor secundária</Button>
      </Grid>
      <Grid item xs={12}>
        <Button size="normal" style={{ marginRight: 8 }}>
          Tamano normal
        </Button>
        <Button size="small">Tamanho menor</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="filled" style={{ marginRight: 8 }}>
          Preenchido
        </Button>
        <Button variant="outlined">Com bordas</Button>
      </Grid>
    </Grid>
  );
};
