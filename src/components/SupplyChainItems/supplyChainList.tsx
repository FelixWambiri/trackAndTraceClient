import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Chip,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import { useListStyles } from "./styles";

const items = [
  { name: "Item 1", color: "red", price: 10.99, eventCount: 3 },
  { name: "Item 2", color: "blue", price: 15.99, eventCount: 1 },
  { name: "Item 3", color: "green", price: 7.99, eventCount: 5 },
];

const SupplyChainList: React.FC = () => {
  const classes = useListStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <List>
        {items.map((item) => (
          <ListItem
            key={item.name}
            className={`${classes.list} ${classes.listItem}`}
            role="listitem"
            aria-label={`${item.name}, ${item.color}, $${item.price}, ${
              item.eventCount
            } ${item.eventCount > 1 ? "Events" : "Event"}`}
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
                label={`${item.eventCount} ${
                  item.eventCount > 1 ? "Events" : "Event"
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
              >
                <ChevronRight alt="Right arrow" id="right-arrow-label" />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SupplyChainList;
