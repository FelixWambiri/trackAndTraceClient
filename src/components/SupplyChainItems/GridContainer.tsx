import React, { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    height: "100%",
  },
  item: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "50%",
    },
  },
}));

const ResponsiveGridContainer: React.FC<Props> = ({ className, children }) => {
  const classes = useStyles();

  return (
    <Grid container className={clsx(classes.gridContainer, className)}>
      <Grid item xs={false} md={2}></Grid>
      <Grid item xs={12} md={8} className={classes.item}>
        {children}
      </Grid>
      <Grid item xs={false} md={2}></Grid>
    </Grid>
  );
};

export default ResponsiveGridContainer;
