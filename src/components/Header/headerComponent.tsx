import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./styles";

const HeaderContent = ({ totalSupplyChainItems, onAddSupplyChainItem }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      role="banner"
      aria-labelledby="supply-chain-items-title"
      aria-describedby="supply-chain-items-description"
    >
      <div className={classes.titleContainer}>
        <Typography
          variant="h5"
          component="h1"
          className={classes.title}
          tabIndex={0}
          id="supply-chain-items-title"
        >
          Supply Chain Items
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          tabIndex={0}
          id="supply-chain-items-description"
        >
          There are {totalSupplyChainItems} total invoices
        </Typography>
      </div>
      <IconButton
        onClick={onAddSupplyChainItem}
        className={classes.button}
        aria-label="Add new supply chain item"
        title="Add new item"
        aria-haspopup="dialog"
        aria-expanded={false}
      >
        <AddIcon className={classes.icon} />
        <Typography className={classes.buttonLabel}>New Item</Typography>
        <Typography variant="srOnly">New Item</Typography>
      </IconButton>
    </div>
  );
};

export default HeaderContent;
