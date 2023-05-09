import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#1F213A",
    },
    "& .MuiPaper-root ": {
      borderTopRightRadius: 20,
    },
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down("sm")]: {
        marginRight: -20,
      },
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end",
    },
  },
  title: {
    flexGrow: 1,
  },
}));
