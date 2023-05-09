import React from "react";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";

import HeaderComponent from "./headerComponent";
import { useHeaderStyles } from "./styles";

const Header: React.FC = () => {
  const classes = useHeaderStyles();
  const navigate = useNavigate();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} md={2}></Grid>
      <Grid item xs={12} md={8} className={classes.item}>
        <HeaderComponent
          totalSupplyChainItems={7}
          onAddSupplyChainItem={() => navigate("/home")}
        />
      </Grid>
      <Grid item xs={false} md={2}></Grid>
    </Grid>
  );
};

export default Header;
