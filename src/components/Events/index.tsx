import React from "react";
import { Box, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EventItem from "./item";

interface IProps {
  events: {
    id: string;
    supplyChainItemId: string;
    location: string;
    custodian: string;
  };
}

const useStyles = makeStyles({
  list: {
    marginTop: 30,
  },
});

const EventsList: React.FC<IProps> = ({ events }) => {
  const classes = useStyles();

  if (events?.length === 0) {
    return null;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100"
    >
      <List className={classes.list}>
        {events?.map((event) => (
          <EventItem event={event} key={event?.id} />
        ))}
      </List>
    </Box>
  );
};

export default EventsList;
