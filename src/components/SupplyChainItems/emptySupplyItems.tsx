import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "70%",
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  icon: {
    fontSize: 80,
    color: theme.palette.grey[400],
  },
  text: {
    marginTop: "5vh",
    color: theme.palette.grey[600],
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5rem",
    },
  },
}));

const EmptySupplyListItems = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <AddCircleIcon
        className={classes.icon}
        role="img"
        aria-label="Add Circle Icon"
      />
      <Typography variant="h4" className={classes.text}>
        No Supply Chain Items found
      </Typography>
    </Box>
  );
};

export default EmptySupplyListItems;
