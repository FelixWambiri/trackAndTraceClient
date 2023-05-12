import React from "react";
import { ListItem, ListItemText, Tooltip, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
  event: {
    id: string;
    supplyChainItemId: string;
    location: string;
    custodian: string;
  };
}

const useStyles = makeStyles({
  listItem: {
    background: "#1F213A",
    borderRadius: 10,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "10px 0px",
  },
  listItemText: {
    color: "white",
  },
  chip: {
    color: "white",
    backgroundColor: "#03a9f4",
    marginRight: "8px",
  },
});

const EventItem = ({ event }: IProps) => {
  const classes = useStyles();

  const shortenId = (id: string) => {
    return id?.substring(0, 8) + "...";
  };

  return (
    <ListItem
      key={event?.id}
      role="listitem"
      aria-label={"Item Event"}
      className={classes.listItem}
    >
      <Tooltip title={event?.supplyChainItemId} arrow>
        <ListItemText
          id={event?.supplyChainItemId}
          primary={
            <>
              <Chip
                label={`Parent ID: ${shortenId(event?.supplyChainItemId)}`}
                color="lightBlue"
                className={classes.chip}
              />
            </>
          }
          className={classes.listItemText}
          primaryTypographyProps={{ variant: "body1" }}
        />
      </Tooltip>
      <ListItemText
        id={event?.location}
        primary={`Location: ${event?.location}`}
        className={classes.listItemText}
        primaryTypographyProps={{ variant: "body1" }}
      />
      <ListItemText
        id={event?.custodian}
        primary={`Custodian: ${event?.custodian}`}
        className={classes.listItemText}
        primaryTypographyProps={{ variant: "body1" }}
      />
    </ListItem>
  );
};

export default EventItem;
