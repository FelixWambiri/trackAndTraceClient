import React from "react";
import Paper from "@material-ui/core/Paper";
import { Route, Routes } from "react-router-dom";

import NavBar from "../NavBar/index";
import Header from "../Header/index";
import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper
      component="div"
      className={classes.root}
      elevation={0}
      aria-label="Page Layout"
    >
      <header className={classes.header} role="banner">
        <Header />
      </header>
      <main className={classes.main} role="main" aria-label="Main Content">
        {children}
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
