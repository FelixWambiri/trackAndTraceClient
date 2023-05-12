import { makeStyles, Theme } from "@material-ui/core/styles";

export const useListStyles = makeStyles((theme: Theme) => ({
  list: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  listItem: {
    padding: theme.spacing(1),
    backgroundColor: "#1F213A",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  listItemTextContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "1 1 auto",
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 50%",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1),
    },
  },
  listItemText: {
    flex: "1 1 50%",
    marginRight: theme.spacing(2),
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 auto",
      marginRight: 0,
      marginBottom: theme.spacing(1),
      textAlign: "center",
    },
  },
  chip: {
    marginLeft: theme.spacing(2),
    minWidth: 30,
    backgroundColor: "#5A3EB2",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginBottom: theme.spacing(1),
    },
  },
  rightArrowContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  rightArrow: {
    color: "#fff",
  },
}));
