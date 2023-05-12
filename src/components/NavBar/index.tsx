import React from "react";
import { AppBar, Toolbar, IconButton, Tooltip } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

import { useStyles } from "./styles";

const NavBar: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" title="Navigation Bar">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title} />
          <Tooltip title="Logout">
            <IconButton
              color="inherit"
              aria-label="Logout"
              onClick={() => handleLogOut()}
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
