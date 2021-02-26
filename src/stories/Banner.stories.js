import React from "react";
import { Banner } from "..";
import { Grid } from "../components/Grid";

export default {
  title: "Components/Banner",
  component: Banner,
};

export const Main = () => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Banner
        color="error"
        title="Mensagem de erro"
      />
        </Grid>
        <Grid item xs={12}>
        <Banner
        color="info"
        title="Mensagem de informação"
      />
        </Grid>
        <Grid item xs={12}>
        <Banner
        color="warning"
        title="Mensagem de alerta"
      />
        </Grid>
        <Grid item xs={12}>
        <Banner
        color="success"
        title="Mensagem de sucesso"
      />
        </Grid>
      </Grid>
  );
};
