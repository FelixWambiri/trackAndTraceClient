import React from "react";
import {
  Box,
  Chip,
  Typography,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

import { useListStyles } from "./styles";

interface IProps {
  // TODO: Add proper typing
  item: any;
}

const SupplyListItem = ({ item }: IProps) => {
  const classes = useListStyles();
  const navigate = useNavigate();
  return (
    <ListItem
      key={item.id}
      className={`${classes.list} ${classes.listItem}`}
      role="listitem"
      aria-label={`${item.name}, ${item.color}, $${item.price}, ${
        item.events.length
      } ${item.events.length > 1 ? "Events" : "Event"}`}
    >
      <Box className={classes.listItemTextContainer}>
        <ListItemText
          primary={item.name}
          secondary={
            <Typography variant="body2">
              {`Color: ${item.color} | Price: $${item.price}`}
            </Typography>
          }
          className={classes.listItemText}
        />
        <Chip
          label={`${item?.events?.length} ${
            item?.events?.length > 1 ? "Events" : "Event"
          }`}
          color="primary"
          className={classes.chip}
        />
      </Box>
      <Box className={classes.rightArrowContainer}>
        <IconButton
          aria-label="View Details"
          aria-labelledby="right-arrow-label"
          className={classes.rightArrow}
          onClick={() => navigate(`/${item?.id}/item-details`)}
        >
          <ChevronRight alt="Right arrow" id="right-arrow-label" />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default SupplyListItem;
