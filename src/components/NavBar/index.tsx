import React from "react";
import { AppBar, Toolbar, IconButton, Tooltip } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useStyles } from "./styles";

type NavProps = {
  onSignOutClick: () => void;
};

const NavBar: React.FC<NavProps> = React.memo(({ onSignOutClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" title="Navigation Bar">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title} />
          <Tooltip title="Logout">
            <IconButton
              color="inherit"
              aria-label="Logout"
              onClick={onSignOutClick}
            >
              <AccountCircle style={{ fontSize: 60 }} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default NavBar;
