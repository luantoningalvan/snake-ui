import React from "react";
import { Button, IconButton, Grid } from "../";
import { FiPlusCircle } from "react-icons/fi";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button style={{ marginRight: 8 }}>Cor primária</Button>
        <Button style={{ marginRight: 8 }} color="secondary">
          Cor secundária
        </Button>
        <Button style={{ marginRight: 8 }} color="neutral">
          Cor neutra
        </Button>
        <Button disabled>Desabilitado</Button>
      </Grid>
      <Grid item xs={12}>
        <Button size="normal" style={{ marginRight: 8 }}>
          Tamano normal
        </Button>
        <Button size="small">Tamanho menor</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" style={{ marginRight: 8 }}>
          Preenchido
        </Button>
        <Button variant="outlined">Com bordas</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" fullWidth>Tamanho total</Button>
      </Grid>
      <Grid item xs={12}>
        <Button startIcon={<FiPlusCircle />}  style={{ marginRight: 8 }}>
          Preenchido
        </Button>
        <Button endIcon={<FiPlusCircle />}>Com bordas</Button>
      </Grid>
      <Grid item xs={12}>
        <IconButton icon={<FiPlusCircle />} />
        <IconButton icon={<FiPlusCircle />} size="small" />
      </Grid>
    </Grid>
  );
};
