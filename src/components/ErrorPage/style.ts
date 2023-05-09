import { makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme:Theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      padding: theme.spacing(4),
      backgroundColor: "#f5f5f5",
      textAlign: "center",
    },
    image: {
      width: "350px",
      height: "350px",
      marginBottom: theme.spacing(2),
    },
    text: {
      fontWeight: "bold",
      fontSize: "1.2rem",
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
      height: 50,
      borderRadius: 10,
      backgroundColor: "#8B79CA",
  
      "&:hover": {
        backgroundColor: "#5A3EB2",
      },
    },
  }));