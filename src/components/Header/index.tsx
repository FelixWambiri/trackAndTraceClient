import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HeaderComponent from "./headerComponent";
import ResponsiveGridContainer from "../SupplyChainItems/GridContainer";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <ResponsiveGridContainer className={classes.root}>
      <HeaderComponent />
    </ResponsiveGridContainer>
  );
};

export default Header;
