import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#141625",
    color: "fff",

    "& .MuiTypography-h5": { color: "white" },
    "& .MuiTextField-root": {
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    "& .MuiButton-containedPrimary": {
      height: 50,
      borderRadius: 10,
      backgroundColor: "#8B79CA",
      "&:hover": {
        backgroundColor: "#5A3EB2",
      },
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    backgroundColor: "#1F213A",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    "& .MuiButton-root": {
      margin: theme.spacing(2, 0),
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  },
  fieldText: {
    color: "#FFFFFF",
  },
}));
