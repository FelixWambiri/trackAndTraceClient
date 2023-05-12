import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    color: "#FFFFFF",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  button: {
    borderRadius: "25px",
    backgroundColor: "#7C5DF8",
    color: "white",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#5A3EB2",
    },
  },
  buttonLabel: {
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    backgroundColor: "white",
    borderRadius: "25px",
    margin: 5,
    color: "#7C5DF8",
  },
}));

