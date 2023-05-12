import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateAreas: `"nav header"
                          "nav main"`,
      gridTemplateRows: "120px 1fr",
      gridTemplateColumns: "10% 1fr",
      height: "100vh",
      margin: 0,
      backgroundColor: "#141625",
      [theme.breakpoints.down("sm")]: {
        gridTemplateAreas: `"nav"
                            "header"
                            "main"`,
        gridTemplateRows: "70px 120px 1fr",
        gridTemplateColumns: "1fr",
      },
    },
    header: {
      gridArea: "header",
      backgroundColor: "#141625",
      position: "sticky",
      top: 0,
      [theme.breakpoints.down("sm")]: {
        position: "sticky",
        top: 0,
      },
    },
    main: {
      gridArea: "main",
      backgroundColor: "#F5F5F5",
      overflow: "auto",
    },
    nav: {
      gridArea: "nav",
      backgroundColor: "#1F213A",
      position: "sticky",
      bottom: 0,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      [theme.breakpoints.down("sm")]: {
        position: "sticky",
        bottom: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  })
);
