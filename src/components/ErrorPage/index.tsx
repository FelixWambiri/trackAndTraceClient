import React from "react";
import { Typography, Button } from "@material-ui/core";

import image from "../Assets/404.jpeg";
import { useStyles } from "./style";

const ErrorPage: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <img
        src={image}
        alt="Error 404 - Page not found"
        className={classes.image}
      />
      <section role="alert" aria-live="assertive">
        <Typography variant="h4" component="h2">
          Error: 404
        </Typography>
        <Typography className={classes.text}>
          The page you requested could not be found.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/"
          className={classes.button}
          aria-label="Go back to home"
        >
          Go back to home
        </Button>
      </section>
    </main>
  );
};

export default ErrorPage;
