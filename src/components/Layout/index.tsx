import React from "react";
import Paper from "@material-ui/core/Paper";

import NavBar from "../NavBar/index";
import Header from "../Header/index";
import SupplyChainList from "../SupplyChainItems/index";
import { useStyles } from "./styles";

const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0} title="Page Layout">
      <header className={classes.header} role="header">
        <Header />
      </header>
      <main className={classes.main} role="main" aria-label="Main Content">
        <SupplyChainList />
      </main>
      <nav
        className={classes.nav}
        role="navigation"
        aria-label="Site Navigation"
      >
        <NavBar />
      </nav>
    </Paper>
  );
};

export default Layout;
