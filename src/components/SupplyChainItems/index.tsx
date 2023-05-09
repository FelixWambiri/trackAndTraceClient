import React from "react";
import Grid from "@material-ui/core/Grid";

import SupplyChainList from "./supplyChainList";
import { useStyles } from "./styles";

const SupplyChainContainer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.supplyChainContainer}>
      <Grid item xs={false} md={2}></Grid>
      <Grid item xs={12} md={8} className={classes.item}>
        <SupplyChainList />
      </Grid>
      <Grid item xs={false} md={2}></Grid>
    </Grid>
  );
};

export default SupplyChainContainer;
